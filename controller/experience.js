const Experience = require('../model/experience');

exports.experienceDetails = (req, res) => {
    console.log(req.body);

    const employer = req.body.employer;
    const job_title = req.body.job_title;
    const city = req.body.city;
    const state = req.body.state;
    const start_month = req.body.start_month;
    const start_year = req.body.start_year;
    const end_month = req.body.end_month;
    const end_year = req.body.end_year;
    const description = req.body.txt;

    const experience = new Experience({
        employer: employer,
        job_title: job_title,
        city: city,
        state: state,
        start_month:start_month,
        start_year:start_year,
        end_month:end_month,
        end_year:end_year,
        description:description
    });
    experience
        .save()
        .then(result => {
            console.log('Details Saved');
            res.setHeader("Set-Cookie", "expID="+result.id+"; Path=/");
            res.redirect('/form/education');
        })
        .catch(err => {
            console.log(err);
        });
};
