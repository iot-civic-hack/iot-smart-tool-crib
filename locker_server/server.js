var express = require('express');
var gpio = require('rpi-gpio');
var app = express();

let lockers = {
  1: {doorStatus: 'closed', lockStatus: 'locked'},
  2: {doorStatus: 'closed', lockStatus: 'locked'}
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

gpio.setup(gpioPins.lock[1], gpio.DIR_OUT, lock1Init);
gpio.setup(gpioPins.lock[2], gpio.DIR_OUT, lock2Init);
gpio.setup(gpioPins.buzzer, gpio.DIR_OUT, buzzerInit);
gpio.setup(gpioPins.led[1].R, gpio.DIR_OUT, led1RedInit);
gpio.setup(gpioPins.led[1].G, gpio.DIR_OUT, led1GreenInit);
gpio.setup(gpioPins.led[1].B, gpio.DIR_OUT, led1BlueInit);
gpio.setup(gpioPins.led[2].R, gpio.DIR_OUT, led2RedInit);
gpio.setup(gpioPins.led[2].G, gpio.DIR_OUT, led2GreenInit);
gpio.setup(gpioPins.led[2].B, gpio.DIR_OUT, led2BlueInit);

function lock1Init() {
  setLock(1, 'lock');
}

function lock2Init() {
  setLock(2, 'lock');
}

function buzzerInit() {
  setBuzzer('off');
}

function led1RedInit() {
  setLED(1, 'off');
}

function led1GreenInit() {
  setLED(1, 'off');
}

function led1BlueInit() {
  setLED(1, 'off');
}

function led2RedInit() {
  setLED(2, 'off');
}

function led2GreenInit() {
  setLED(2, 'off');
}

function led2BlueInit() {
  setLED(2, 'off');
}

function setBuzzer(value) {
  var buzzer = {'on': false, 'off': true};
  gpio.write(gpioPins.buzzer, buzzer[value], function(err) {
      if (err) throw err;
      console.log('Written to Buzzer');
  });
}

function setLock(id, value) {
  var lock = {'unlock': false, 'lock': true};
  gpio.write(gpioPins.lock[id], lock[value], function(err) {
      if (err) throw err;
      console.log('Written to Lock');
  });
}

function setLED(id, color, value) {
  var led = {'on': false, 'off': true};
  gpio.write(gpioPins.lock[id][color], led[value], function(err) {
      if (err) throw err;
      console.log('Written to Lock');
  });
}

app.get('/', function (req, res) {
  res.send('OK');
});

app.get('/unlock', function (req, res) {
  var lockerID = req.param('id');
  console.warn("Locker id: unlocked", lockerID);
  setLock(lockerID, 'unlock');
  res.send(lockerID);
});

app.get('/lock', function (req, res) {
  var lockerID = req.param('id');
  console.warn("Locker id: unlocked", lockerID);
  setLock(lockerID, 'lock');
  res.send(lockerID);
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
