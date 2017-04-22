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
    2: {'R': 11, 'G': 15, 'B': 13}
  }
}

gpio.destroy();
gpio.setup(gpioPins.lock[1], gpio.DIR_OUT, lockInit.bind(this, 1));
gpio.setup(gpioPins.lock[2], gpio.DIR_OUT, lockInit.bind(this, 2));
gpio.setup(gpioPins.buzzer, gpio.DIR_OUT, buzzerInit);
gpio.setup(gpioPins.led[1]['R'], gpio.DIR_OUT, ledInit.bind(this, 1, 'R'));
gpio.setup(gpioPins.led[1]['G'], gpio.DIR_OUT, ledInit.bind(this, 1, 'G'));
gpio.setup(gpioPins.led[1]['B'], gpio.DIR_OUT, ledInit.bind(this, 1, 'B'));
gpio.setup(gpioPins.led[2]['R'], gpio.DIR_OUT, ledInit.bind(this, 2, 'R'));
gpio.setup(gpioPins.led[2]['G'], gpio.DIR_OUT, ledInit.bind(this, 2, 'G'));
// gpio.setup(gpioPins.led[2]['B'], gpio.DIR_OUT, ledInit.bind(this, 2, 'B'));

function lockInit(id) {
  setLock(id, 'lock');
}

function buzzerInit() {
  setBuzzer('off');
}

function ledInit(id, color) {
  setLED(id, color, 'off');
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
  console.log(gpioPins.led[id][color], color);
  gpio.write(gpioPins.led[id][color], led[value], function(err) {
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
