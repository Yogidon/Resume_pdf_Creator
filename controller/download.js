const Personal = require('../model/personal');
const Experience = require('../model/experience');
const Education = require('../model/education');
const Skill = require('../model/skill');

let p,edu,exp,s;
let personalID,eduID,expID,skillID;
let skills=[6];

exports.download = (req, res) => {

    personalID = req.get('Cookie').split(';')[2].trim().split('=')[1];
    console.log(personalID);
    Personal.findById(personalID,(err,data)=>{
        p=data;
    });

    eduID = req.get('Cookie').split(';')[4].trim().split('=')[1];
    console.log(eduID);
    Education.findById(eduID,(err,data)=>{
        edu=data;
    });

    skillID = req.get('Cookie').split(';')[5].trim().split('=')[1];
    console.log(skillID);
    Skill.findById(skillID,(err,data)=>{
        s=data;
        console.log(s);
    });

    expID = req.get('Cookie').split(';')[3].trim().split('=')[1];
    console.log(expID);
    Experience.findById(expID,(err,data)=>{
        exp=data;
        console.log(exp);

        var keys = s.skill, key, i;
        for(i = 0; key = keys[i]; i++)
        {
            skills[i]=s.skill[i];
        }
        res.render('form_download',{
            name:p.first_name+" "+p.last_name,
            website:p.website,
            profile:p.profile,
            pin_code:p.pin_code,
            email:p.email,
            phone:p.phone_no,
            hobbie_1:p.hobbies[0],
            hobbie_2:p.hobbies[1],
            hobbie_3:p.hobbies[2],


            employer:exp.employer,
            job_title : exp.job_title,
            city : exp.city,
            state : exp.state,
            start_month : exp.start_month,
            start_year : exp.start_year,
            end_month : exp.end_month,
            end_year : exp.end_year,
            description : exp.description,


            school_10 : edu.school_10,
            board_10 : edu.board_10,
            sch10_start_month :edu.sch10_start_month,
            sch10_start_year :edu.sch10_start_year,
            sch10_end_month :edu.sch10_end_month,
            sch10_end_year :edu.sch10_end_year,

            school_12 : edu.school_12,
            board_12 : edu.board_12,
            sch12_start_month:edu.sch12_start_month,
            sch12_start_year:edu.sch12_start_year,
            sch12_end_month:edu.sch12_end_month,
            sch12_end_year:edu.sch12_end_year,

            u_clg:edu.u_clg,
            under_course:edu.under_course,
            under_start_month:edu.under_start_month,
            under_start_year:edu.under_start_year,
            under_end_month:edu.under_end_month,
            under_end_year:edu.under_end_year,
            under_degree:edu.under_degree,

            p_clg:edu.p_clg,
            post_course:edu.post_course,
            post_start_month:edu.post_start_month,
            post_start_year:edu.post_start_year,
            post_end_month:edu.post_end_month,
            post_end_year:edu.post_end_year,
            post_degree:edu.post_degree,

            skill_1 : skills[0],
            skill_2 : skills[1],
            skill_3 : skills[2],
            skill_4 : skills[3],
            skill_5 : skills[4],
            skill_6 : skills[5]

        });
    });

    };