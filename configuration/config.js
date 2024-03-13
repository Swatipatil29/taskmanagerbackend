const mongoose = require("mongoose")
const config = async function(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/taskmanager")
        console.log("connected to db")
    } catch(e) {
        console.log("error while connencting")
    }
    
    
}

module.exports = config