var SmartLocker = function () {};
var gpio = require('rpi-gpio');

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

SmartLocker.prototype.checkLockerOpen = function (id) {
  gpio.read(gpioPins.sense[id], function(err, value) {
    console.log("Locker "+id+" is "+value);
    return value;
  }
};

module.exports = new SmartLocker();
// var gpio = require('rpi-gpio');
//
// let lockers = {
//   1: {status: 'closed'},
//   2: {status: 'closed'}
// }
//
// let gpioPins = {
//   "lock" : {
//     1: 7,
//     2: 29
//   }
// }
//
// var SmartLocker = function () {};
//
// SmartLocker.Test = "Test";

// const checkBuzzer = (id) => {
//   if(lockers[id].status == 'open') {
//
//     // buzz the buzzer
//
//     setTimeout(() => this.checkBuzzer(id), 2000);
//   }
// }
//
// const checkLockerOpen = (id) => {
//   return gpioPins.lock
// }
//
// const unlock = (id) => {
//
//   // run the code to unlock
//
//   lockers[id].status = 'open';
//
//   setTimeout(() => this.checkBuzzer(id), 4000);
//
// }
//
//
// const lock = (id) => {
//
//   // run the code to lock
//
//   lockers[id].status = 'closed';
// }
//
// const getStatus = (id) => {
//   return lockers[id].status;
// }


// module.exports = new SmartLocker();
