var SerialPort = require("serialport");
//var SerialPort = require("serialport").SerialPort;

var newPort = new SerialPort("/dev/serial0", {baudRate: 230400, databits: 8, parity: 'none'}, false);
console.log("connected")

newPort.on('data', function(data) {
  console.log(data.toString());
});

var buffer = new Buffer(1);
//buffer[0] = 0b11111111;
buffer[0] = 0b01110111;

//newPort.open(function (error) {
//  if(error) {
//    console.log('Error while opening the port ' + error);
//    } else {
//        console.log('CST port open');
//        com.write(buffer, function (err, result) {
//            if (err) {
//                console.log('Error while sending message : ' + err);
//            }
//            if (result) {
//                console.log('Response received after sending message : ' + result);
//            }    
//        });
//    }              
//});

//newPort.write('A');

function postHandshake() {
  newPort.write(buffer);
}

setTimeout(postHandshake, 2000);
