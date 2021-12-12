const express= require("express");
const app =express();
var Gpio = require('onoff').Gpio,
sensor = new Gpio(17, 'in', 'both'),
sensor1 = new Gpio(27, 'in', 'both'),
GreenLedGate = new Gpio(22, 'out', 'both'),
interval;

interval = setInterval(function () {

sensor.watch(function(err,value){
    if (err) exit (err);
    //sensor1.watch(function(err,value1){
        //if (err) exit (err);
        if (value==1 ){
            GreenLedGate . writeSync (1);
            console.log(`the sensor is ${sensor} and sensor1 is ${sensor1}`)
        }
        else{
            GreenLedGate . writeSync (0);

        }


   // })

})

}, 2000);

app.get('/', function(req, res){
    res.send('welcome to my WOT you can view /distance');

})

app.get('/person',function( req, res){ 
   
    sensorValue = sensor.readSync();
    console.log("State:"+sensorValue);    
    res.send("State:"+sensorValue); //read page 60 of full stack book
})

app.get('/person/number', function(req, res){


    sensor.watch(function(err,value){
        if (err) exit (err);
        res.send("State:"+value);
        console.log("State:"+value); 

    })
    process.on('SIGINT', exit);
    
    //sensorValue = sensor.readSync();
    //console.log("State:"+sensorValue);    
    //res.send("State:"+sensorValue);
})

app.listen(3000, function(){
    console.log('server is listening on port 3000');
    // listen method of app starts up the server and has it listen port 3000 of the Pi.
})