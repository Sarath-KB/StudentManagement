const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql2');
const pars = require('body-parser');
const bodyParser = require('body-parser');
const mailer = require('nodemailer')
var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.naefx@gmail.com',
        pass: 'Nabeel@123'
    }
});
function sendEmail(to, subject, content) {
    const mailOptions = {
        from: 'info.naefx@gmail.com',
        to,
        subject,
        html: content
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info, "email sending")
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
const PATH = './public/uploads';
const upload = multer({
    storage: multer.diskStorage({
        destination: PATH,
        filename: function (req, file, cb) {
            let origialname = file.originalname;
            let ext = origialname.split('.').pop();
            let filename = origialname.split('.').slice(0, -1).join('.');
            cb(null, filename + '-' + Date.now() + '.' + ext)
        }
    })
})


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_naefx',
    port: 3306
});

//check database connection

db.connect(err => {
    if (err) { console.log(err) }
    console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
const APPPORT = 3000
app.listen(APPPORT, () => {
    console.log("Server is Running");
});

app.get('/district', (req, res) => {
    let qry = `select * from tbl_district ORDER BY district_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/placereport', (req, res) => {
    let qry = `SELECT p.place_name, COUNT(s.student_id) as 'num' FROM tbl_student s INNER JOIN tbl_place p ON p.place_id=s.place_id GROUP BY s.place_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/deptreport', (req, res) => {
    let qry = `SELECT d.dept_name, COUNT(f.faculty_id) as 'num' FROM tbl_faculty f INNER JOIN tbl_dept d ON d.dept_id=f.dept_id GROUP BY f.dept_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/maxfaculty', (req, res) => {
    let qry = `SELECT MAX(faculty_id) as id FROM tbl_faculty`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/maxstudent', (req, res) => {
    let qry = `SELECT MAX(student_id) AS id FROM tbl_student`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/acomplaintview', (req, res) => {
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id LEFT JOIN tbl_faculty f ON c.faculty_id=f.faculty_id LEFT JOIN tbl_student s ON s.student_id=c.student_id WHERE c.complaint_target='Admin' AND c.complaint_status=0 ORDER BY c.complaint_date ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/ccategory', (req, res) => {
    let qry = `SELECT * FROM tbl_complainant_category`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hdist', (req, res) => {
    let qry = `select * from tbl_district`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hplace/:id', (req, res) => {
    let distid = req.params.id
    let qry = `SELECT * FROM tbl_place WHERE district_id='${distid}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/distplace/:id', (req, res) => {
    let distid = req.params.id
    let qry = `SELECT * FROM tbl_place WHERE district_id='${distid}' ORDER BY place_name ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/district/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_district where district_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/snotes/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes n INNER JOIN tbl_subject s ON n.subject_id=s.subject_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE n.notes_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/ssnotes/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes n INNER JOIN tbl_subject s ON n.subject_id=s.subject_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE n.notes_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/facultyreport/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_district where district_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hmycomplaints/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id INNER JOIN tbl_faculty f ON f.faculty_id=c.faculty_id INNER JOIN tbl_place p ON p.place_id=f.place_id WHERE c.complainant_type='HOD' AND c.faculty_id='${id}' ORDER BY c.complaint_date DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hcomplaintstatus/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id LEFT JOIN tbl_faculty f ON f.faculty_id=c.faculty_id LEFT JOIN tbl_student s ON s.student_id=c.student_id WHERE c.complaint_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/htomecomplaints/:id', (req, res) => {

    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id LEFT JOIN tbl_faculty f ON f.faculty_id=c.faculty_id LEFT JOIN tbl_student s ON s.student_id=c.student_id WHERE c.complaint_target='HOD' AND c.complaint_status=0 AND c.complaint_target_id='${id}' ORDER BY c.complaint_date ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hsinglestudents/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_dept d ON d.dept_id=co.dept_id INNER JOIN tbl_place p ON p.place_id=s.place_id INNER JOIN tbl_district di ON di.district_id=p.district_id WHERE s.student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hstudents/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_dept d ON d.dept_id=co.dept_id WHERE d.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/asinglecomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id LEFT JOIN tbl_faculty f ON f.faculty_id=c.faculty_id LEFT JOIN tbl_student s ON s.student_id=c.student_id WHERE complaint_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/asinglestud/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_place p ON p.place_id=s.place_id INNER JOIN tbl_district d ON d.district_id=p.district_id WHERE s.student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/getadmin/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_admin WHERE admin_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/singleassignments/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment WHERE assignment_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/singlenote/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes WHERE notes_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

// app.get('/snotes/:id', (req, res) => {
//     let id = req.params.id;
//     let qry = `SELECT * FROM tbl_notes n INNER JOIN tbl_subject s ON n.subject_id=s.subject_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE n.subject_id='${id}'`;
//     db.query(qry, (err, result) => {
//         if (err) {
//             console.log("Cannot Get Data...!!");
//         }
//         if (result.length > 0) {
//             res.send({
//                 message: "Data Retrived",
//                 data: result
//             })
//         }
//     })
// })

app.get('/sassignments/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment a INNER JOIN tbl_subject s ON a.subject_id=s.subject_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE a.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/ssubjects/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_subject s INNER JOIN tbl_semester se ON se.semester_id=s.semester_id WHERE s.semester_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/mysemesters/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_semester s INNER JOIN tbl_student st ON s.class_id=st.class_id WHERE st.student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/scomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id WHERE c.student_id='${id}' AND c.complainant_type='Student'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/sclassteacher/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_class WHERE class_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/scount/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT c.class_name,co.course_abbreviation,b.batch_name,COUNT(s.student_id) as 'num' FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id inner join tbl_batch b on b.batch_id=c.batch_id inner join tbl_course co on co.course_id=b.course_id WHERE co.dept_id='${id}' GROUP BY s.class_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tstream/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes n INNER JOIN tbl_subject s ON s.subject_id=n.subject_id inner join tbl_faculty f on f.faculty_id=s.faculty_id WHERE n.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tasscount/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT s.subject_name,COUNT(a.subject_id) as num FROM tbl_assignment a INNER JOIN tbl_subject s ON s.subject_id=a.subject_id INNER JOIN tbl_faculty f ON s.faculty_id=f.faculty_id WHERE f.faculty_id='${id}' ORDER BY a.subject_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hasscount/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT *, COUNT(*) as number FROM tbl_assignment a INNER JOIN tbl_subject s ON s.subject_id=a.subject_id INNER JOIN tbl_semester se ON se.semester_id=s.semester_id INNER JOIN tbl_class c ON c.class_id=se.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_dept de ON de.dept_id=co.dept_id WHERE de.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tverifycomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id INNER JOIN tbl_student s ON s.student_id=c.student_id INNER JOIN tbl_place p ON p.place_id=s.place_id WHERE c.complaint_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tmycomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id WHERE c.faculty_id='${id}' ORDER BY complaint_date DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/ttomecomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint c INNER JOIN tbl_complainant_category cc ON cc.complainant_category_id=c.complaint_category_id  INNER JOIN tbl_student s ON s.student_id=c.student_id WHERE c.complaint_target='Teacher' AND c.complaint_target_id=${id} ORDER BY c.complaint_date`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/selecteddistrict/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_place p INNER JOIN tbl_district d ON d.district_id=p.district_id WHERE p.place_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})



app.get('/unselecteddistrict/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_district WHERE district_id != (SELECT district_id FROM tbl_place WHERE place_id='${id}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/dept/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_dept where dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/course/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_course where course_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/batch/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_batch where batch_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/semester/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_semester where semester_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/astudent/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_student where student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/place', (req, res) => {
    let qry = `select * from tbl_place p inner join tbl_district d on d.district_id=p.district_id ORDER BY p.place_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/place/:id', (req, res) => {
    let id = req.params.id;
    let qry = `select * from tbl_place p inner join tbl_district d on d.district_id=p.district_id where place_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

// app.get('/ccategory', (req, res) => {
//     let qry = `select * from tbl_complaint_category`;
//     db.query(qry, (err, result) => {
//         if (err) {
//             console.log("Cannot Get Data...!!");
//         }
//         if (result.length > 0) {
//             res.send({
//                 message: "Data Retrived",
//                 data: result
//             })
//         }
//     })
// })

app.get('/designation', (req, res) => {
    let qry = `select * from tbl_designation ORDER BY designation_title ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/ctype', (req, res) => {
    let qry = `select * from tbl_course_type ORDER BY course_type ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/admin', (req, res) => {
    let qry = `select * from tbl_admin`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/dept', (req, res) => {
    let qry = `select * from tbl_dept ORDER BY dept_name ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/faculty', (req, res) => {
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON f.dept_id=d.dept_id ORDER BY f.faculty_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/facultylogin', (req, res) => {
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON f.dept_id=d.dept_id INNER JOIN tbl_designation de ON de.designation_id=f.designation_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/studentlogin', (req, res) => {
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON s.class_id=c.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_dept d ON d.dept_id=co.dept_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/faculty/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_designation d ON f.designation_id=d.designation_id INNER JOIN tbl_dept de ON de.dept_id=f.dept_id INNER JOIN tbl_place p ON p.place_id=f.place_id INNER JOIN tbl_district di ON di.district_id=p.district_id WHERE f.faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/thod/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_designation d ON f.designation_id=d.designation_id WHERE f.dept_id='${id}' AND d.designation_title='HOD'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hfaculty/:id', (req, res) => {
    let Gid = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_designation d ON d.designation_id=f.designation_id INNER JOIN tbl_dept de ON de.dept_id=f.dept_id INNER JOIN tbl_place p ON p.place_id=f.place_id INNER JOIN tbl_district di ON di.district_id=p.district_id WHERE f.dept_id='${Gid}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hsemester/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_semester s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_dept d ON d.dept_id=co.dept_id WHERE d.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hsubject/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_subject s INNER JOIN tbl_semester se ON se.semester_id=s.semester_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE f.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/facultyverify', (req, res) => {
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON f.dept_id=d.dept_id INNER JOIN tbl_place p ON f.place_id=p.place_id INNER JOIN tbl_district di ON p.district_id=di.district_id WHERE f.status=1`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/faculty/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON f.dept_id=d.dept_id INNER JOIN tbl_place p ON f.place_id=p.place_id INNER JOIN tbl_district di ON p.district_id=di.district_id WHERE f.faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/course', (req, res) => {
    let qry = `SELECT * FROM tbl_course c INNER JOIN tbl_dept d ON c.dept_id=d.dept_id INNER JOIN tbl_course_type ct ON c.course_type_id=ct.course_type_id ORDER BY c.course_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})



app.get('/batch', (req, res) => {
    let qry = `SELECT * FROM tbl_batch b INNER JOIN tbl_course c ON b.course_id=c.course_id ORDER BY b.batch_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hbatch/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_batch b INNER JOIN tbl_course c ON c.course_id=b.course_id INNER JOIN tbl_dept d ON d.dept_id=c.dept_id WHERE d.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/batchcourse', (req, res) => {
    let qry = `SELECT tbl_batch.batch_name,tbl_course.course_abbreviation FROM tbl_batch,tbl_course WHERE tbl_batch.course_id=tbl_course.course_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/semester', (req, res) => {
    let qry = `SELECT * FROM tbl_semester s INNER JOIN tbl_class c ON s.class_id=c.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON b.course_id=co.course_id ORDER BY s.semester_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/semesterclass', (req, res) => {
    let qry = `SELECT tbl_semester.semester_name,tbl_class.class_name FROM tbl_semester,tbl_class WHERE tbl_semester.class_id=tbl_class.class_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/subject', (req, res) => {
    let qry = `select * from tbl_subject`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/astudent', (req, res) => {
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON s.class_id=c.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id ORDER BY s.student_id DESC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/steacher/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty WHERE dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/studentverify', (req, res) => {
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_place p ON p.place_id=s.place_id INNER JOIN tbl_district d ON d.district_id=p.district_id WHERE s.status=1`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/astudent/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON s.class_id=c.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_semester se ON se.class_id=c.class_id INNER JOIN tbl_course co ON b.course_id=co.course_id WHERE s.student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/timetable', (req, res) => {
    let qry = `select * from tbl_timetable`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/assignment', (req, res) => {
    let qry = `select * from tbl_assignment`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/sassignment', (req, res) => {
    let qry = `select * from tbl_assignment_status`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/group', (req, res) => {
    let qry = `select * from tbl_group`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/dgroup', (req, res) => {
    let qry = `select * from tbl_group_details`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/sattendance', (req, res) => {
    let qry = `select * from tbl_attendace_student`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/notes', (req, res) => {
    let qry = `select * from tbl_notes`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/marks', (req, res) => {
    let qry = `select * from tbl_marks`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/acomplaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_complaint WHERE tbl_complaint.complaint_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/acomplaint', (req, res) => {
    let qry = `SELECT * FROM tbl_complaint WHERE tbl_complaint.complaint_target='Admin'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hcomplaint', (req, res) => {
    let qry = `SELECT * FROM tbl_complaint WHERE tbl_complaint.complaint_target='HOD'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tcomplaint', (req, res) => {
    let qry = `SELECT * FROM tbl_complaint WHERE tbl_complaint.complaint_target='Teacher'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/complaint/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_designation d on d.designation_id=f.designation_id INNER JOIN tbl_dept dp on dp.dept_id=f.dept_id INNER JOIN tbl_place p ON p.place_id=f.place_id INNER JOIN tbl_district di on di.district_id=p.place_id WHERE f.faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/class', (req, res) => {
    let qry = `SELECT * FROM tbl_class c INNER JOIN tbl_batch b ON c.batch_id=b.batch_id INNER JOIN tbl_course co ON b.course_id=co.course_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hsingleclass/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_class c INNER JOIN tbl_batch b ON c.batch_id=b.batch_id INNER JOIN tbl_course co ON b.course_id=co.course_id INNER JOIN tbl_faculty f ON f.faculty_id=c.faculty_id where class_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hsinglesubject/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_subject s INNER JOIN tbl_semester se ON se.semester_id=s.semester_id INNER JOIN tbl_class c ON c.class_id=se.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id WHERE s.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hclass/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_class c INNER JOIN tbl_batch b ON c.batch_id=b.batch_id INNER JOIN tbl_course co ON b.course_id=co.course_id INNER JOIN tbl_faculty f ON f.faculty_id=c.faculty_id WHERE co.dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.post('/hclass', (req, res) => {
    classname = req.body.classname;
    batchname = req.body.batchname;
    facultyname = req.body.facultyname;
    let qry = `insert into tbl_class(class_name, batch_id, faculty_id)values('${classname}','${batchname}','${facultyname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }
    })
})

app.post('/hsubject', (req, res) => {
    subjectname = req.body.subjectname;
    semestername = req.body.semestername;
    facultyname = req.body.facultyname;
    let qry = `insert into tbl_subject(subject_name, semester_id, faculty_id)values('${subjectname}','${semestername}','${facultyname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }
    })
})



app.delete('/hclass/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_class WHERE class_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })
})

app.put('/hclass/:id', (req, res) => {
    let gId = req.params.id;
    let classname = req.body.classname;
    let batchname = req.body.batchname;
    let facultyname = req.body.facultyname;
    let qr = `UPDATE tbl_class SET class_name='${classname}',batch_id='${batchname}',faculty_id='${facultyname}' WHERE class_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/faccept/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `UPDATE tbl_faculty SET status=2 WHERE faculty_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/saccept/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `UPDATE tbl_student SET status=2 WHERE student_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/freject/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `UPDATE tbl_faculty SET status=3 WHERE faculty_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/sreject/:id', (req, res) => {
    let gId = req.params.id;
    let qr = `UPDATE tbl_student SET status=3 WHERE student_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/hsubject/:id', (req, res) => {
    let gId = req.params.id;
    subjectname = req.body.subjectname;
    semestername = req.body.semestername;
    facultyname = req.body.facultyname;
    let qr = `UPDATE tbl_subject SET subject_name='${subjectname}',semester_id='${semestername}',faculty_id='${facultyname}' WHERE subject_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.delete('/hsubject/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_subject WHERE subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })
})

app.get('/subject', (req, res) => {
    let qry = `SELECT * FROM tbl_subject`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/timetable/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_timetable WHERE class_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/classsubject', (req, res) => {
    let qry = `SELECT s.subject_id,s.subject_name,f.faculty_name,se.semester_name,co.course_abbreviation,c.class_name FROM tbl_subject s INNER JOIN tbl_semester se ON s.semester_id=se.semester_id INNER JOIN tbl_faculty f ON s.faculty_id=f.faculty_id INNER JOIN tbl_class c ON se.class_id=c.class_id INNER JOIN tbl_batch b ON c.batch_id=b.batch_id INNER JOIN tbl_course co ON b.course_id=co.course_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/notes/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes n INNER JOIN tbl_subject s ON s.subject_id=n.subject_id WHERE n.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tclasswork/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment a INNER JOIN tbl_subject s ON a.subject_id=s.subject_id WHERE a.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tsingleclasswork/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment a INNER JOIN tbl_subject s ON s.subject_id=a.subject_id WHERE a.assignment_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tsubmittedontime/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment_status ass INNER JOIN tbl_assignment a ON a.assignment_id=ass.assignment_id INNER JOIN tbl_student s ON s.student_id=ass.student_id WHERE a.assignment_id='${id}' AND a.due_date>=ass.submission_date`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tsubmittedlate/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment_status ass INNER JOIN tbl_assignment a ON a.assignment_id=ass.assignment_id INNER JOIN tbl_student s ON s.student_id=ass.student_id WHERE a.assignment_id='${id}' AND a.due_date<ass.submission_date`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tsubmittednot/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_semester se ON se.class_id=c.class_id INNER JOIN tbl_subject su ON su.semester_id=se.semester_id INNER JOIN tbl_assignment a ON a.subject_id=su.subject_id WHERE s.student_id NOT IN (SELECT student_id FROM tbl_assignment_status WHERE assignment_id='${id}') AND a.assignment_id='${id}' ORDER by a.assignment_id`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/assignments/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_assignment n INNER JOIN tbl_subject s ON s.subject_id=n.subject_id WHERE n.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.post('/district', (req, res) => {
    distname = req.body.disname;
    let qry = `insert into tbl_district(district_name)values('${distname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }
    })
})

app.post('/createstudent', (req, res) => {
    studentname = req.body.studentname;
    classname = req.body.classname;
    studentemail = req.body.studentemail;
    studentusername = req.body.studentusername;
    studentpassword = req.body.studentpassword;
    studplace = req.body.studplace;
    let qry = `INSERT INTO tbl_student(student_name, student_email, class_id, student_username, student_password, place_id) VALUES ('${studentname}','${studentemail}','${classname}','${studentusername}','${studentpassword}','${studplace}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            sendEmail(studentemail, "Account Created", `<p>Dear ${studentname},</p>
                    <p>Your account has been created, please login using following username and password</p>
                    <p>Username: ${studentname}</p>
                    <p>Password: ${studentpassword}</p>
                    <p style="color:red;"><i><u>Please Update Your Profile to Get Access to the System</u></i></p>
                    `)
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/asssub', (req, res) => {
    file = req.body.file;
    date = req.body.date;
    student = req.body.student;
    assignment = req.body.assignment;
    let qry = `INSERT INTO tbl_assignment_status(assignment_id, student_id, submission_date, submitted_files) VALUES ('${assignment}','${student}','${date}','${file}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/tnotes', (req, res) => {
    title = req.body.title;
    discription = req.body.discription;
    subject_id = req.body.subject_id;
    file = req.body.file;
    date = req.body.date;
    let qry = `INSERT INTO tbl_notes(notes_title, notes_description, date, subject_id, files) VALUES ('${title}','${discription}','${date}','${subject_id}','${file}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/place', (req, res) => {
    placename = req.body.placename;
    districtname = req.body.districtname;
    let qry = `INSERT INTO tbl_place(place_name, district_id) VALUES('${placename}','${districtname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })

})

app.post('/dept', (req, res) => {
    deptname = req.body.deptname;
    let qry = `insert into tbl_dept(dept_name)values('${deptname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/designation', (req, res) => {
    designationtitle = req.body.designationtitle;
    let qry = `INSERT INTO tbl_designation(designation_title) VALUES('${designationtitle}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/faculty', (req, res) => {
    facultyname = req.body.facultyname;
    facultydesignation = req.body.facultydesignation;
    facultyemail = req.body.facultyemail;
    facultydept = req.body.facultydept;
    facultyplace = req.body.facultyplace;
    facultyusername = req.body.facultyusername;
    facultypassword = req.body.facultypassword;
    let qry = `INSERT INTO tbl_faculty(faculty_name, designation_id, faculty_email, dept_id, faculty_username, faculty_password, place_id) VALUES('${facultyname}','${facultydesignation}','${facultyemail}','${facultydept}','${facultyusername}','${facultypassword}','${facultyplace}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result)
        sendEmail(facultyemail, "Account Created", `<p>Dear ${facultyname},</p>
                    <p>Your account has been created, please login using following username and password</p>
                    <p>Username: ${facultyusername}</p>
                    <p>Password: ${facultypassword}</p>
                    <p style="color:red;"><i><u>Please Update Your Profile to Get Access to the System</u></i></p>
                    `)
        if (result) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/ctype', (req, res) => {
    coursetype = req.body.coursetype;
    let qry = `INSERT INTO tbl_course_type(course_type) VALUES('${coursetype}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/course', (req, res) => {
    coursename = req.body.coursename;
    courseabbriviation = req.body.courseabbriviation;
    coursetype = req.body.coursetype;
    deptname = req.body.deptname;
    let qry = `INSERT INTO tbl_course(course_name, course_abbreviation, dept_id, course_type_id) VALUES('${coursename}','${courseabbriviation}','${deptname}','${coursetype}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/batch', (req, res) => {
    batchname = req.body.batchname;
    coursename = req.body.coursename;
    let qry = `INSERT INTO tbl_batch(batch_name, course_id) VALUES('${batchname}','${coursename}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/semester', (req, res) => {
    semestername = req.body.semestername;
    classname = req.body.classname;
    let qry = `INSERT INTO tbl_semester(semester_name, class_id) VALUES('${semestername}','${classname}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/tcomplaint', (req, res) => {
    complaintcategory = req.body.complaintcategory;
    to = req.body.to;
    complainttargetid = req.body.complainttargetid;
    complainanttype = req.body.complainanttype;
    facultyid = req.body.facultyid;
    complaint = req.body.complaint;
    complaintdate = req.body.complaintdate;
    let qry = `INSERT INTO tbl_complaint(complaint_category_id, complaint_target, complaint_target_id, complainant_type, faculty_id, complaint, complaint_date,complaint_status) VALUES('${complaintcategory}','${to}','${complainttargetid}','${complainanttype}','${facultyid}','${complaint}','${complaintdate}','0')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/hmycomplaints', (req, res) => {
    complaintcategory = req.body.complaintcategory;
    to = req.body.to;
    complainttargetid = req.body.complainttargetid;
    complainanttype = req.body.complainanttype;
    facultyid = req.body.facultyid;
    complaint = req.body.complaint;
    complaintdate = req.body.complaintdate;
    let qry = `INSERT INTO tbl_complaint(complaint_category_id, complaint_target, complaint_target_id, complainant_type, faculty_id, complaint, complaint_date,complaint_status) VALUES('${complaintcategory}','${to}','${complainttargetid}','${complainanttype}','${facultyid}','${complaint}','${complaintdate}','0')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.post('/scomplaint', (req, res) => {
    complaintcategory = req.body.complaintcategory;
    to = req.body.to;
    complainttargetid = req.body.complainttargetid;
    complainanttype = req.body.complainanttype;
    studid = req.body.studid;
    complaint = req.body.complaint;
    complaintdate = req.body.complaintdate;
    let qry = `INSERT INTO tbl_complaint(complaint_category_id, complaint_target, complaint_target_id, complainant_type, student_id, complaint, complaint_date,complaint_status) VALUES('${complaintcategory}','${to}','${complainttargetid}','${complainanttype}','${studid}','${complaint}','${complaintdate}','0')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

// app.post('/astudent', (req, res) => {
//     let studentname = req.body.studentname;
//     let classname = req.body.classname;
//     let studentemail = req.body.studentemail;
//     let studentusername = req.body.studentusername;
//     let studentpassword = req.body.studentpassword;
//     let studplace = req.body.studplace;
//     let qry = `INSERT INTO tbl_student(student_name, student_email, class_id, student_username, student_password, place_id) VALUES('${studentname}','${studentemail}','${classname}','${studentusername}','${studentpassword}','${studplace}')`;
//     db.query(qry, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         if (result.length > 0) {
//             res.send({
//                 message: "data Inserted"
//             })
//         }
//         else {
//             res.send({
//                 message: "Wrong"
//             })
//         }
//     })
// })

app.post('/tclasswork', (req, res) => {
    subjectid = req.body.subjectid;
    file = req.body.file;
    discription = req.body.discription;
    title = req.body.title;
    date = req.body.date;
    let qry = `INSERT INTO tbl_assignment(subject_id, due_date, assignment_title, assignment_description, files) VALUES ('${subjectid}','${date}','${title}','${discription}','${file}')`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "data Inserted"
            })
        }
        else {
            res.send({
                message: "Wrong"
            })
        }

    })
})

app.delete('/district/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_district WHERE district_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/deletecw/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_assignment WHERE assignment_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/place/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_place WHERE place_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/dept/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_dept WHERE dept_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/designation/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_designation WHERE designation_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/faculty/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_faculty WHERE faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/ctype/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_course_type WHERE course_type_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/course/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_course WHERE course_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/batch/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_batch WHERE batch_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/semester/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_semester WHERE semester_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/astudent/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_student WHERE student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.delete('/tnotes/:id', (req, res) => {
    let id = req.params.id;
    let qry = `DELETE FROM tbl_notes WHERE notes_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result)
        if (result) {
            res.send({
                message: "Data Retrived"
            })
        }
    })

})

app.put('/district/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let districtname = req.body.districtname;
    let qr = `update tbl_district set district_name='${districtname}' where district_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/tsingleclasswork/:id', (req, res) => {
    let gId = req.params.id;
    title = req.body.title
    description = req.body.description
    date = req.body.date
    file = req.body.file
    let qr = `UPDATE tbl_assignment SET due_date='${date}',assignment_title='${title}',assignment_description='${description}',files='${file}' WHERE assignment_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/asinglecomplaint/:id', (req, res) => {
    let gId = req.params.id;
    let status = req.body.status;
    let response = req.body.response;
    let qr = `UPDATE tbl_complaint SET complaint_response='${response}',complaint_status='${status}' WHERE complaint_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/hcomplaintstatus/:id', (req, res) => {
    let gId = req.params.id;
    let status = req.body.status;
    let response = req.body.response;
    let qr = `UPDATE tbl_complaint SET complaint_response='${response}',complaint_status='${status}' WHERE complaint_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/getadmin/:id', (req, res) => {
    let gId = req.params.id;
    let email = req.body.email;
    let image = req.body.image
    let qr = `UPDATE tbl_admin SET admin_email='${email}',admin_photo='${image}' WHERE admin_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/dept/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let deptname = req.body.deptname;
    let qr = `update tbl_dept set dept_name='${deptname}' where dept_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/tverifycomplaint/:id', (req, res) => {
    let gId = req.params.id;
    let status = req.body.status;
    let qr = `update tbl_complaint set complaint_status='${status}' where complaint_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/place/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let placename = req.body.placename;
    let distname = req.body.distname;
    let qr = `update tbl_place set place_name='${placename}', district_id='${distname}' where place_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/faculty/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let facultyname = req.body.facultyname;
    let facultydesignation = req.body.facultydesignation;
    let facultyemail = req.body.facultyemail;
    let facultydept = req.body.facultydept;
    let facultyplace = req.body.facultyplace;
    let facultyusername = req.body.facultyusername;
    let qr = `UPDATE tbl_faculty SET faculty_name='${facultyname}', designation_id='${facultydesignation}',faculty_email='${facultyemail}',dept_id='${facultydept}',faculty_username='${facultyusername}',place_id='${facultyplace}' WHERE faculty_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data updated'
        });
    });
})

app.put('/course/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let coursename = req.body.coursename;
    let courseabbriviation = req.body.courseabbriviation;
    let coursetype = req.body.coursetype;
    let deptname = req.body.deptname;
    let qr = `UPDATE tbl_course SET course_name='${coursename}',course_abbreviation='${courseabbriviation}',dept_id='${deptname}',course_type_id='${coursetype}' WHERE course_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/batch/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let batchname = req.body.batchname;
    let coursename = req.body.coursename;
    let qr = `UPDATE tbl_batch SET batch_name='${batchname}',course_id='${coursename}' WHERE batch_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/semester/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let semestername = req.body.semestername;
    let classname = req.body.classname;
    let qr = `UPDATE tbl_semester SET semester_name='${semestername}',class_id='${classname}' WHERE semester_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/astudent/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let gId = req.params.id;
    let studentname = req.body.studentname;
    let classname = req.body.classname;
    let studentemail = req.body.studentemail;
    let studentusername = req.body.studentusername;
    let placeid = req.body.studplace;
    let qr = `UPDATE tbl_student SET student_name='${studentname}',student_email='${studentemail}',class_id='${classname}',student_username='${studentusername}', place_id='${placeid}' WHERE student_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.get('/htimetable/:id', (req, res) => {
    let semid = req.params.id;
    let MyDate = new Date();
    let MyDateString;
    MyDate.setDate(MyDate.getDate());
    MyDateString = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
    let qry = `SELECT * FROM tbl_timetable t INNER JOIN tbl_subject s ON s.subject_id=t.subject_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id INNER JOIN tbl_semester se ON se.semester_id=t.semester_id INNER JOIN tbl_class c ON c.class_id=se.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id WHERE t.date='${MyDateString}' AND t.semester_id=${semid} ORDER BY t.hr_number ASC`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})


app.get('/tsemester/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_subject s INNER JOIN tbl_semester se ON se.semester_id=s.semester_id INNER JOIN tbl_faculty f ON f.faculty_id=s.faculty_id INNER JOIN tbl_class c ON c.class_id=se.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id WHERE s.faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tsubject/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_subject s INNER JOIN tbl_semester se ON se.semester_id=s.semester_id INNER JOIN tbl_class c ON c.class_id=se.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id WHERE s.subject_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tclassstudents/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student WHERE class_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/hprofile/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON d.dept_id=f.dept_id INNER JOIN tbl_designation de ON de.designation_id=f.designation_id INNER JOIN tbl_place p ON p.place_id=f.place_id INNER JOIN tbl_district di ON di.district_id=p.district_id WHERE faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/sprofile/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_student s INNER JOIN tbl_class c ON c.class_id=s.class_id INNER JOIN tbl_batch b ON b.batch_id=c.batch_id INNER JOIN tbl_course co ON co.course_id=b.course_id INNER JOIN tbl_place p ON p.place_id=s.place_id INNER JOIN tbl_district d ON d.district_id=p.district_id WHERE s.student_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tnotes/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_notes WHERE notes_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.get('/tfaculty/:id', (req, res) => {
    let id = req.params.id;
    let qry = `SELECT * FROM tbl_faculty f INNER JOIN tbl_dept d ON d.dept_id=f.dept_id INNER JOIN tbl_designation de ON de.designation_id=f.designation_id INNER JOIN tbl_place p ON p.place_id=f.place_id INNER JOIN tbl_district di ON di.district_id=p.district_id WHERE faculty_id='${id}'`;
    db.query(qry, (err, result) => {
        if (err) {
            console.log("Cannot Get Data...!!");
        }
        if (result.length > 0) {
            res.send({
                message: "Data Retrived",
                data: result
            })
        }
    })
})

app.post('/hod/profilePhoto', upload.single('hodPforile'), (req, res) => {
    if (!req.file) {
        res.status(501).json(({ error: "please upload a file" }))
    }
    const fileUrl = `http://${req.hostname}:${APPPORT}/uploads/${req.file.filename}`
    res.json({ url: fileUrl });
})

app.post('/addadmin/profilePhoto', upload.single('adminPforile'), (req, res) => {
    if (!req.file) {
        res.status(501).json(({ error: "please upload a file" }))
    }
    const fileUrl = `http://${req.hostname}:${APPPORT}/uploads/${req.file.filename}`
    res.json({ url: fileUrl });
})

app.put('/hprofile/:id', (req, res) => {
    let hId = req.params.id;
    let image = req.body.image;
    let email = req.body.email;
    let contact = req.body.contact;
    let place = req.body.place;
    let gender = req.body.gender;
    let dateofbirth = req.body.dateofbirth;
    let adhaar = req.body.adhaar;
    let qr = `UPDATE tbl_faculty SET faculty_email='${email}',faculty_photo='${image}',faculty_dob='${dateofbirth}',faculty_gender='${gender}',faculty_contactno='${contact}',place_id='${place}',faculty_adhaarno='${adhaar}',status=1 WHERE faculty_id='${hId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/sprofile/:id', (req, res) => {
    let hId = req.params.id;
    let image = req.body.image;
    let email = req.body.email;
    let contact = req.body.contact;
    let place = req.body.place;
    let gender = req.body.gender;
    let dateofbirth = req.body.dateofbirth;
    let adhaar = req.body.adhaar;
    let qr = `UPDATE tbl_student SET student_email='${email}',student_photo='${image}',student_dob='${dateofbirth}',student_gender='${gender}',student_contactno='${contact}',place_id='${place}',student_adhaar='${adhaar}',status=1 WHERE student_id='${hId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/tnotes/:id', (req, res) => {
    let hId = req.params.id;
    let title = req.body.title;
    let discription = req.body.discription;
    let file = req.body.file;
    console.log(hId, title, discription, file);
    let qr = `UPDATE tbl_notes SET notes_title='${title}',notes_description='${discription}',files='${file}' WHERE notes_id='${hId}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/hprofile/:id', (req, res) => {
    let hId = req.params.id;

    let qr = `UPDATE tbl_faculty SET faculty_email='${email}',faculty_photo='${image}',faculty_dob='${dateofbirth}',faculty_gender='${gender}',faculty_contactno='${contact}',place_id='${place}',faculty_adhaarno='${adhaar}',status=1 WHERE faculty_id=${hId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.post('/addnewadmin', (req, res) => {
    let image = req.body.image;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let designation = req.body.designation;
    let name = req.body.name;
    let qr = `INSERT INTO tbl_admin(admin_username, admin_password, admin_name, admin_designation, admin_email, admin_photo) VALUES ('${username}','${password}','${name}','${designation}','${email}','${image}')`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/achangepass/:id', (req, res) => {
    let gId = req.params.id;
    let password = req.body.newpassword
    let qr = `UPDATE tbl_admin SET admin_password='${password}' WHERE admin_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/hchangepass/:id', (req, res) => {
    let gId = req.params.id;
    let password = req.body.newpassword
    let qr = `UPDATE tbl_faculty SET faculty_password='${password}' WHERE faculty_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})

app.put('/schangepass/:id', (req, res) => {
    let gId = req.params.id;

    let password = req.body.newpassword
    let qr = `UPDATE tbl_student SET student_password='${password}' WHERE student_id=${gId}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data updated'
        });
    });
})