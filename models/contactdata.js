const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    FirstName:{
        type: String,
        required:true
    },
    LastName:{
        type: String,
        required:true
    },
    Email:{
        type: String,
        required:true
    },
    Subject:{
        type: String
    },
    Message:{
        type: String
    }
})

const Customer = new mongoose.model("Customer", contact);

module.exports = Customer;