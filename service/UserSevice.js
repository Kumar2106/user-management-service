const UserModel = require('../../model/database/mongodb/UserModel')
const name = "kumar"

const getAllUsers = async () => {
    console.log("Fetching all the user from collection")
    await UserModel.find()
        .then((data) => {
            console.log("All the users are fetched from collection")
            return data
        })
        .catch((error) => {
            console.error("Error occurred while fetching all the users")
            console.error("Error stack: " + error)
            throw new Error("Error while fetching all the users")
        })
}

const getUserByEmailId = async (emailId) => {
    console.log("Fetching user details for emailId: " + emailId)
    await UserModel.findById(emailId)
        .then((data) => {
            console.log("User details fetched for emailId: " + emailId)
            return data;
        })
        .catch((error) => {
            console.error("Error occurred while fetching user details for emailId: " + emailId)
            console.error("Error stack: " + error)
            throw new Error("Error while fetching user details for emailId: " + emailId)
        })
}

const deleteUserByEmailId = async (emailId) => {
    console.log("Deleting user having emailId: " + emailId)
    await UserModel.deleteOne({emailId: emailId})
        .then((deleteResult) => {
            console.log("Deleted the user having emailId: " + emailId)
            console.log(deleteResult)
        })
        .catch((error) => {
            console.error("Error occurred while deleing the user having emailId: " + emailId)
            console.error("Error stack: " + error)
            throw new Error("Error occurred while deleting the user having emailId: " + emailId)
        })
}

const updateUserByEmailId = async (emailId, req) => {
    console.log("Updating user having emailId: " + emailId)
    await UserModel.updateOne(emailId, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber
    }).then((updateResult)=>{
        console.log("Successfully update user details having emailId: "+emailId)
        console.log("updateResult :"+updateResult)
    }).catch((error)=>{
        console.log("Error occurred while updating user having emailId: "+emailId)
        console.log("Error stack: "+error)
        throw  new Error("Error occurred while updating user having emailId: "+emailId)
    })
}