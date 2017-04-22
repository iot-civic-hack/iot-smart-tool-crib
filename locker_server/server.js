var express = require('express');
var app = express();
var gpio = require('rpi-gpio');
var output = 0;

gpio.setup(7, gpio.DIR_OUT, write);
gpio.setup(16, gpio.DIR_IN, gpio.EDGE_BOTH);

app.get('/', function (req, res) {
  res.send('OK');
});

app.get('/unlock', function (req, res) {

  var lockerID = req.param('id');
  output = !output;
  gpio.write(7, output);


  console.warn("locker id: ", lockerID);

  //
  // UNLOCK CODE HERE
  // 




  res.send(output);
});

gpio.on('change', function(channel, value) {
    console.log('Channel ' + channel + ' value is now ' + value);
    gpio.write(7, value);
});

function write() {
    gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
//gpio.destroy();
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
