
const Student = require('../models/studentModel');

exports.postNewStudentProfile = (req, res, next) => {

    //format 
    // (_id, surname, firstname, lastname, username, password, startyeat, city, email, gender, age, addressline1, addressline2, addressline3, mobile, birthdate);

    Student.create({
        _id: 'name124',
        surname: req.body.surname,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: "123",
        email: req.body.email,

        age: parseInt(req.body.age),
        classteacher: req.body.classteacher,
        startyear: parseInt(req.body.startyear),
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        addressline3: req.body.addressline3,
        city: req.body.city,
        mobile: req.body.mobilenumber,
    })
        .then(result => {
            res.json({
                message: "success"
            })
        })
        .catch(error => {
            console.log(error);
        })



}