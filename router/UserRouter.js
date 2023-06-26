const express = require('express')
const router = express.Router();
const {
    deleteUserByEmailId,
    updateUserByEmailId,
    getUserByEmailId,
    getAllUsers,
    createUser
} = require('../service/UserSevice')

router.get('/', (req, res) => {
    console.log("UserRouter: Fetching all the user from MongoDB")
    getAllUsers(req,res)

})
    .get('/:emailId', (req, res) => {
    emaild = req.params.emailId
    console.log("UserRouter: Fetching the user details for emailId: ")
    getUserByEmailId(emaild,req,res)
})
    .post('/', (req, res) => {
    console.log("UserRouter: Creating user with the provided details")
        createUser(req,res)
})
    .put('/:emailId', (req, res) => {
    emailId = req.params.emailId
    console.log("UserRouter: Updating user details with emailId: " + emailId)
    updateUserByEmailId(emailId, req,res)
})
    .delete('/:emailId', (req, res) => {
        emailId = req.params.emailId
        console.log("UserRouter: Deleted the user with emailId: " + emailId)
        deleteUserByEmailId(emailId,req,res)
    })


module.exports = router