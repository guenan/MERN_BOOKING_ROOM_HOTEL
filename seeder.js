const mongoose = require("mongoose");
const {rooms} = require('./Rooms.js');
const Room = require("./models/room")
const db = require("./db.js")

const importData = async () => {
    try{
        await Room.deleteMany();
        await Room.insertMany(rooms);

        console.log('Data Imported!');
        process.exit();
    }catch (error){
        console.error(`${error}`);
        process.exit(1);
    }

};


// call import function
importData();