require('dotenv').config();
const express = require('express');
const app = express();
const nodeMailerCtrl = require("./nodeMailerController");
const {SERVER_PORT} = process.env;

//FOR req.body
app.use(express.json());
//HOSTING
app.use(express.static(__dirname + '/../build'));
//SERVER PORT
app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));
//NODEMAILER
app.post("/api/email", nodeMailerCtrl.email);