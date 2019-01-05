const Skill = require("../model/skill");

let x=[];
let l=[];
let a=[];
let b=[];
let y,z,q,w;

exports.skillDetails = (req, res) => {
    console.log(req.body);
    let count = Object.keys(req.body).length;
    for (let i=1;i<=count/2;i++){
        y = `skill_${i}`;
        z = `level_${i}`;
        a.push(y);
        b.push(z);
    }
    for (let i=0;i<(count/2);i++)
    {
        q = req.body[a[i]];
        w = req.body[b[i]];
        x.push(q);
        l.push(w);
        console.log(q);
        console.log(w);
    }

    const skill = new Skill({
        skill : x.slice(),
        level : l.slice()
    });

    skill
        .save()
        .then(result => {
            console.log('Details Saved');
            res.setHeader("Set-Cookie", "skillID="+result.id+"; Path=/");
            res.redirect('/form/review');
        })
        .catch(err => {
            console.log(err);
        });
};
