var Gpio = require('onoff').Gpio,
sensor = new Gpio(17, 'in', 'both');
sensorValue = sensor.readSync();

console.log("State:"+sensorValue);


