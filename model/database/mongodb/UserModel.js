const Mongoose = require('mongoose')
const Schema = Mongoose.Schema;

const UserModel = new Schema({
    emailId: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    }
})

module.exports = Mongoose.model('UserModel',UserModel)