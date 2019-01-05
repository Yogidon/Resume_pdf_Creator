const Education = require('../model/education');

exports.educationDetails = (req, res) => {
    console.log(req.body);

    const school_10 = req.body.school_10;
    const board_10 = req.body.board_10;
    const sch10_start_month = req.body.sch10_start_month;
    const sch10_start_year = req.body.sch10_start_year;
    const sch10_end_month = req.body.sch10_end_month;
    const sch10_end_year = req.body.sch10_end_year;

    const school_12 = req.body.school_12;
    const board_12 = req.body.board_12;
    const sch12_start_month = req.body.sch12_start_month;
    const sch12_start_year = req.body.sch12_start_year;
    const sch12_end_month = req.body.sch12_end_month;
    const sch12_end_year = req.body.sch12_end_year;

    const u_clg = req.body.u_clg;
    const under_course = req.body.under_course;
    const under_start_month = req.body.under_start_month;
    const under_start_year = req.body.under_start_year;
    const under_end_month = req.body.under_end_month;
    const under_end_year = req.body.under_end_year;
    const under_degree = req.body.under_degree;

    const p_clg = req.body.p_clg;
    const post_course = req.body.post_course;
    const post_start_month = req.body.post_start_month;
    const post_start_year = req.body.post_start_year;
    const post_end_month = req.body.post_end_month;
    const post_end_year = req.body.post_end_year;
    const post_degree = req.body.post_degree;



    const education = new Education({
        school_10: school_10,
        board_10:board_10,
        sch10_start_month:sch10_start_month,
        sch10_start_year:sch10_start_year,
        sch10_end_month:sch10_end_month,
        sch10_end_year:sch10_end_year,
        school_12:school_12,
        board_12:board_12,
        sch12_start_month:sch12_start_month,
        sch12_start_year:sch12_start_year,
        sch12_end_month:sch12_end_month,
        sch12_end_year:sch12_end_year,

        u_clg:u_clg,
        under_course:under_course,
        under_start_month:under_start_month,
        under_start_year:under_start_year,
        under_end_month:under_end_month,
        under_end_year:under_end_year,
        under_degree:under_degree,

        p_clg:p_clg,
        post_course:post_course,
        post_start_month:post_start_month,
        post_start_year:post_start_year,
        post_end_month:post_end_month,
        post_end_year:post_end_year,
        post_degree:post_degree

    });

    education
        .save()
        .then(result => {
            console.log('Details Saved');
            res.setHeader("Set-Cookie", "eduID="+result.id+"; Path=/");
            res.redirect('/form/skill');
        })
        .catch(err => {
            console.log(err);
        });
};
