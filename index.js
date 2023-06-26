const express = require('express')
const app = express();
require('./config/database/MongoDbConfiguration')
const HealthRouter = require('./router/HealthRouter')
const UserRouter = require('./router/UserRouter')


const port = process.env.port || 3000
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/health',HealthRouter)
app.use('/user',UserRouter)
app.listen(port, ()=> console.log(`Service started on ${port}`))
