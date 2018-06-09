//const SerialPort = require("serialport");
const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');
const {resolve, join} = require('path');

//const newPort = new SerialPort("/dev/serial0", {baudRate: 230400, databits: 8, parity: 'none'}, false);
//const newPort = new SerialPort("/dev/ttyUSB0", {baudRate: 230400, databits: 8, parity: 'none'}, false);
//console.log("connected")

//newPort.on('data', function(data) {
//  console.log(data.toString());
//});

app.listen(80);

function handler (req, res) {
  fs.readFile(resolve('index.html'),
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    }
  );
}

io.on('connection', function (socket) {
  socket.on('getCam',
    // The client requests the latest camera image
    function(){
      console.log("Taking photo to serve...");
      console.log("Photo taken, sending response.");
    }
  );
  socket.on('start',
    function(data) {
      console.log("Start command recieved.");
      console.log("Recieved data", data);
      //const buffer = new Buffer(1);
      //buffer[0] = data;
      //if(newPort.isOpen)
      //{
      //  console.log("Writing to serial port...");
      //  newPort.write(buffer);
      //}
    }
  );
});
