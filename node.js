const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.sendFile(__dirname + '/calculator.html');
})

app.listen(8000,function(req,res){
    console.log("Server is Running");
});