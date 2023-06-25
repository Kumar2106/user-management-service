const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("Everything is up and running")
        .end()
})


app.listen(5000, ()=> console.log("Service started on 5000"))
