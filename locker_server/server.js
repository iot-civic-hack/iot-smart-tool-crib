var express = require('express');
var gpio = require('rpi-gpio');
var app = express();

let lockers = {
  1: {status: 'closed'},
  2: {status: 'closed'}
}

let gpioPins = {
  'lock' : {
    1: 7,
    2: 29
  },
  'sense' : {
    1: 16,
    2: 18
  },
  'buzzer' : 38,
  'led' : {
    1: {'R': 31, 'G': 13, 'B': 19},
    2: {'R': 17, 'G': 22, 'B': 27}
  }
}

gpio.setup(gpioPins.lock[1], gpio.DIR_OUT);
gpio.setup(gpioPins.lock[2], gpio.DIR_OUT);
gpio.setup(gpioPins.buzzer, gpio.DIR_OUT, main);
gpio.setup(gpioPins.led[1].R, gpio.DIR_OUT);
gpio.setup(gpioPins.led[1].G, gpio.DIR_OUT);
gpio.setup(gpioPins.led[1].B, gpio.DIR_OUT);
gpio.setup(gpioPins.led[2].R, gpio.DIR_OUT);
gpio.setup(gpioPins.led[2].G, gpio.DIR_OUT);
gpio.setup(gpioPins.led[2].B, gpio.DIR_OUT);

function main() {
    setBuzzer('on');
    setTimeout(function() { setBuzzer('off'); }, 1000);
}

function setBuzzer(value) {
  var buzzer = {'on': false, 'off': true};
  gpio.write(gpioPins.buzzer, buzzer[value], function(err) {
      if (err) throw err;
      console.log('Written to pin');
  });
}

app.get('/', function (req, res) {
  res.send('OK');
});

app.get('/unlock', function (req, res) {

  var lockerID = req.param('id');
  output = !output;
  // gpio.write(7, output);


  console.warn("locker id: ", lockerID);

  //
  // UNLOCK CODE HERE
  //




  res.send(output);
});

// gpio.on('change', function(channel, value) {
//     console.log('Channel ' + channel + ' value is now ' + value);
//     //gpio.write(38, value);
//     gpio.write(31, true);
//     gpio.write(33, value);
//     gpio.write(35, value);
// });
//
// function write() {
//     gpio.write(38, true, function(err) {
//         if (err) throw err;
//         console.log('Written to pin');
//     });
// }
//gpio.destroy();
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
