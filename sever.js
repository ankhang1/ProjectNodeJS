const express = require('express');
const app = express();

const server = app.listen(7000,function(){
    console.log(`Express running -> PORT ${server.address().port}`);
})

app.get('/',function(req,res){
    res.send("Hello");
})