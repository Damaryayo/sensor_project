var Gpio = require('onoff').Gpio,
sensor = new Gpio(4, 'in'),
sensorValue = sensor.readSync();
console.log("State:"+sensorValue)
        