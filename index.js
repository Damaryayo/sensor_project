const express= require("express");
const app =express();
var Gpio = require('onoff').Gpio,
sensor = new Gpio(17, 'in', 'both');


app.get('/', function(req, res){
    res.send('welcome to my WOT you can view /distance');

})

app.get('/person',function(err, req, res){   
    sensorValue = sensor.readSync();
    if (sensorValue===0){
        console.log(" there is none and the State is:"+sensorValue); 
        res.send(" there is none and the State is:"+sensorValue);
    }
    console.log(" there is someone and the State is:"+sensorValue); 
    //console.log("State:"+sensorValue);    
    res.send(" there is someone and the State is:"+sensorValue); //read page 60 of full stack book
})

app.get('/distance2', function(req, res){
    res.send(`${2*50} meters`);
})

app.listen(3000, function(){
    console.log('server is listening on port 3000');
    // listen method of app starts up the server and has it listen port 3000 of the Pi.
})