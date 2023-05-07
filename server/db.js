const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/adp",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDB
// exports.module=connectDB