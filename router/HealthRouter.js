const express = require('express')
const router = express.Router()
const {getServiceHealth} = require('../service/HealthService')

router.get('/',(req,res)=> {
   console.log("HealthRouter: Getting service health")
   getServiceHealth(req,res)
})


module.exports = router;