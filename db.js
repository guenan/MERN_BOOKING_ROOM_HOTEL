const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://audreynangue:swFWS2LMNuKj6ETp@ntga-mongocluster.bsyfurh.mongodb.net/rooms_hotel_db'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose