const mongoose = require("mongoose");

const order = new mongoose.Schema({
    FirstName:{
        type: String,
    },
    LastName:{
        type: String,
    },
    Email:{
        type: String,
    },
    TableType:{
        type: String
    },
    GuestNumber:{
        type: Number
    },
    Placement:{
        type: String
    },
    Date:{
        type: Date
    },
    Time:{
        type: String
    },
    Note:{
        type: String
    }
})

const Booking = new mongoose.model("Booking", order);

module.exports = Booking;