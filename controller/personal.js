const Personal = require('../model/personal');
const Hobbies = [];

exports.personalDetails = (req, res) => {
    console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const phone_no = req.body.phone_no;
    const profile = req.body.profile;
    const website = req.body.website;
    Hobbies.push(req.body.hobbies1);
    Hobbies.push(req.body.hobbies2);
    Hobbies.push(req.body.hobbies3);

    const personal = new Personal({
        first_name: first_name,
        last_name: last_name,
        email:email,
        phone_no:phone_no,
        profile : profile,
        website : website,
        hobbies:Hobbies.slice()
    });
    personal
        .save()
        .then(result => {
            console.log('Details Saved');
            res.setHeader("Set-Cookie", "personalID="+result.id+"; Path=/");
            res.redirect('/form/experience');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPersonalDetails = (req ,res) => {
    Personal.find()
        .then(personal => {
            res.render('form_review',{
                first_name:personal[0].first_name,
                last_name:personal[0].last_name,
                address:personal[0].address,
                city:personal[0].city,
                state:personal[0].state,
                pin_code:personal[0].pin_code,
                email_id:personal[0].email,
                phone_no:personal[0].phone_no,
                hobbie_1:personal[0].hobbies[0],
                hobbie_2:personal[0].hobbies[1],
                hobbie_3:personal[0].hobbies[2]
            });
            module.exports = personal;
        })
};