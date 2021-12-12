var Gpio = require('onoff').Gpio,
sensor1 = new Gpio(17, 'in', 'both'),
sensor2 = new Gpio(27, 'in', 'both'),
GreenLedGate = new Gpio(22, 'out');
let value1,
value2;

sensor1.watch(function (err, value) {
if (err) exit(err);
value1=value;
sensor2.watch(function (err, value) {
    if (err) exit(err);
    value2=value;
if (value1==1 && value2==1){
    GreenLedGate . writeSync (1);
    console.log(`the sensor1 is ${value1} and the sensor2 is ${value2}`)
}
else {
    GreenLedGate . writeSync (0);
    console.log(`the sensor1 is ${value1} and the sensor2 is ${value2}`)
};

})

})
function exit(err) {
if (err) console.log('An error occurred: ' + err);
sensor1.unexport();
sensor2.unexport();
console.log('Bye, bye!')
process.exit();
}
process.on('SIGINT', exit);