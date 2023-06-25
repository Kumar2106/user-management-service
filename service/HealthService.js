const getServiceHealth = (req,res) => {
    res.send('Everything up and running on the server side')
        .end();
}

module.exports = {getServiceHealth}