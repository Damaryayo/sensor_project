const express= require("express");
const app =express();


app.get('/', function(req, res){
    res.send('welcome to my WOT');
})

app.get('/distance',function(req, res){
    res.send("24 meters"); //read page 60 of full stack book
})

app.get('/distance2', function(req, res){
    res.send(`${2*50} meters`);
})

app.listen(3000, function(){
    console.log('server is listening on port 3000');
    // listen method of app starts up the server and has it listen port 3000 of the Pi.
})