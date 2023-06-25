const express = require('express')
const router = express.Router()
const {getServiceHealth} = require('../service/HealthService')

router.get('/',(req,res)=> {
   getServiceHealth(req,res)
})


module.exports = router;