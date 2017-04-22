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

function checkLockerOpen(id) {
  gpio.read(gpioPins.sense[id], function(err, value) {
    console.log("Locker "+id+" is "+value);
    return value;
  });
};

checkLockerOpen(1);

// gpio.setup(38, gpio.DIR_OUT, write);
// gpio.setup(16, gpio.DIR_IN, gpio.EDGE_BOTH);
// gpio.setup(31, gpio.DIR_OUT);
// gpio.setup(33, gpio.DIR_OUT);
// gpio.setup(35, gpio.DIR_OUT);

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
