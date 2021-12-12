const express= require("express");
const app =express();
var Gpio = require('onoff').Gpio,
sensor = new Gpio(2, 'in', 'both');


app.get('/', function(req, res){
    res.send('welcome to my WOT you can view /distance');

})

app.get('/person',function(err, req, res){ 
   
    sensorValue = sensor.readSync();
    console.log("State:"+sensorValue);    
    res.send("State:"+sensorValue); //read page 60 of full stack book
})

app.get('/person/number', function(req, res){
    
    sensorValue = sensor.readSync();
    console.log("State:"+sensorValue);    
    res.send("State:"+!sensorValue);
})

app.listen(3000, function(){
    console.log('server is listening on port 3000');
    // listen method of app starts up the server and has it listen port 3000 of the Pi.
})