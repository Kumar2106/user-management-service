const express = require('express')
const app = express();
require('./config/MongoDbConfiguration')
const HealthRouter = require('./router/HealthRouter')

const port = process.env.port || 5000

app.use('/health',HealthRouter)

app.listen(port, ()=> console.log(`Service started on ${port}`))
