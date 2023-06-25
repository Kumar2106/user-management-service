const Mongoose = require('mongoose')

module.exports =  Mongoose.connect('mongodb+srv://aditya:aditya@sandbox.zkdaz.mongodb.net/?retryWrites=true&w=majority',{
    dbName: 'user-management-service'
})
.then(()=> console.log("Connected to the MongoDb"))
.catch(()=> console.log("Error in connecting to the MongoDb"))