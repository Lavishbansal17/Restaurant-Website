const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URI).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log('no connection');
    console.log(err);
})