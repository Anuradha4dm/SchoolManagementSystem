const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
//include the body to the parse
const app = express();

//these are the main routing modules
const studentRoute = require('./routes/studentRouter');
const sequelize = require('./util/databaseConnection');
const adminRouter = require('./routes/adminRoute');

//resolving CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '* ');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
})



//include the body parser 
app.use(bodyParser.json());

app.use('/student', studentRoute);
app.use('/admin', adminRouter);


sequelize.sync({ force: true })
    .then(result => {
        console.log("Connection success")
        app.listen(3000);
    })
    .catch(error => {
        console.log(error)
    })


























