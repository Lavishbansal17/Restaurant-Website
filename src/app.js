const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');

require("../db/conn")
const Contact = require('../models/contactdata');
const Order = require('../models/bookingdata');
const {response} = require('express');

const port = process.env.PORT || 4000;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/menu", (req, res)=>{
    res.render("menu")
})
app.get("/contact", (req, res)=>{
    res.render("contact")
})
app.get("/booking", (req, res)=>{
    res.render("booking")
})

// For Contact Page
app.post("/contact", async(req, res)=>{
    try{
        const newCustomer = new Contact({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Subject: req.body.Subject,
            Message: req.body.Message
        })

        const person = await newCustomer.save();
        res.status(201).render("index");

    } catch(error) {
        res.status(400).send(error);
    }
})

// For Booking Page 
app.post("/booking", async(req, res)=>{
    try{
        const newBooking = new Order({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            TableType: req.body.TableType,
            GuestNumber: req.body.GuestNumber,
            Placement: req.body.Placement,
            Date: req.body.Date,
            Time: req.body.Time,
            Note: req.body.Note
        })

        const order = await newBooking.save();
        res.status(201).render("index");

    } catch(error) {
        res.status(400).send(error);
    }
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});