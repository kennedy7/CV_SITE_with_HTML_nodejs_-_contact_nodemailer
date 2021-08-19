const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 4000
const bodyparser = require("body-parser");
app.listen(PORT, () => { console.log(`SERVER RUNNING ON PORT ${PORT}`) })

//EJS
// app.set('view engine', 'ejs')
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/cv.html')
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());
app.post("/", (req, res)=>{
    console.log(req.body)

    //MAIL SETUP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // port: 587,
        auth: {
            user: 'mynodemailtestmail@gmail.com',
            pass: 'Nodemailer'
        }
    });

    const mailOptions = {
        from: req.body.emailAddress,
        to: 'mynodemailtestmail@gmail.com',
        subject: `message from  ${req.body.emailAddress}: ${req.body.subject}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('mailing error');
        } else {
            console.log('Email sent successfully:' + data.response);
            res.send('success')
        }
    });
})
app.get("/myName", (req, res)=>{
    res.send("OKORO KENNEDY HILLARY")
})


