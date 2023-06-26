const UserModel = require('../model/database/mongodb/UserModel')

const getAllUsers = async (req,res) => {
    console.log("Fetching all the user from collection")
    await UserModel.find()
        .then((data) => {
            console.log("All the users are fetched from collection")
            res.send(data).end()
        })
        .catch((error) => {
            console.error("Error occurred while fetching all the users")
            console.error("Error stack: " + error)
            throw new Error("Error while fetching all the users")
        })
}

const getUserByEmailId = async (emailId,req,res) => {
    console.log("Fetching user details for emailId: " + emailId)
    await UserModel.findById(emailId)
        .then((data) => {
            console.log("User details fetched for emailId: " + emailId)
            res.send(data).end()
        })
        .catch((error) => {
            console.error("Error occurred while fetching user details for emailId: " + emailId)
            console.error("Error stack: " + error)
            throw new Error("Error while fetching user details for emailId: " + emailId)
        })
}

const deleteUserByEmailId = async (emailId,req,res) => {
    console.log("Deleting user having emailId: " + emailId)
    await UserModel.deleteOne({_id: emailId})
        .then((deleteResult) => {
            console.log("Deleted the user having emailId: " + emailId)
            console.log(deleteResult)
            res.send("Deleted the user with emailId: "+emailId).end()
        })
        .catch((error) => {
            console.error("Error occurred while deleing the user having emailId: " + emailId)
            console.error("Error stack: " + error)
            throw new Error("Error occurred while deleting the user having emailId: " + emailId)
        })
}

const updateUserByEmailId = async (emailId, req,res) => {
    console.log("Updating user having emailId: " + emailId)
    await UserModel.updateOne(emailId, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber
    }).then((updateResult) => {
        console.log("Successfully update user details having emailId: " + emailId)
        console.log("updateResult :" + updateResult)
        res.send("Updated user details for the user: "+emailId).end()
    }).catch((error) => {
        console.log("Error occurred while updating user having emailId: " + emailId)
        console.log("Error stack: " + error)
        throw  new Error("Error occurred while updating user having emailId: " + emailId)
    })
}

const createUser = async (req,res) => {
    console.log("Creating user with these details: " + req.body)
    const user = new UserModel({
        emailId: req.body.emailId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber
    })

    user.save().then((saveResult) => {
        console.log("Saved the user with these details ")
        console.log("MongoDB Response: " + saveResult)
        res.send("User Created").end()
    }).catch((error) => {
        console.error("Error occurred while saving user into mongodb")
        console.error("Error stack: " + error)
    })
}


module.exports = {createUser,getAllUsers,getUserByEmailId,updateUserByEmailId,deleteUserByEmailId}