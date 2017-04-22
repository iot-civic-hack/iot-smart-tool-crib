var SmartLockerM2X = function () {};
var M2X = require("m2x");
var m2x_client = new M2X("9d63caff92ca9f25d3e0ff277860cc2e");
var dateFormat = require('dateformat');
device_id = "60b2bd2ad03a28ab34609cf68e13596f";

SmartLockerM2X.prototype.updateDoorCount = function (id, count) {
  var now = new Date();
  var locker = {1: 'Locker1activity', 2: 'Locker2activity'};
  var params = {
    // timestamp: (optional) iso 8601 formatted string
    timestamp: dateFormat(now, 'isoUtcDateTime'),
    values: {},
    location: {
      latitude: 39.966976,
      longitude: -86.008618
    },
  }
  params.values[locker[id]] = count;
  m2x_client.devices.postUpdate(device_id, params, function(response) {
      if (response.isSuccess()) {
          console.log(response.json);
      } else {
          console.log(JSON.stringify(response.error()));
      }
  });
}

SmartLockerM2X.prototype.updateDoorStatus = function (id, status) {
  var now = new Date();
  var door = {}
  var locker = {1: 'Locker1activity', 2: 'Locker2activity'};
  var params = {
    // timestamp: (optional) iso 8601 formatted string
    timestamp: dateFormat(now, 'isoUtcDateTime'),
    values: {},
    location: {
      latitude: 39.966976,
      longitude: -86.008618
    },
  }
  params.values[locker[id]] = count;
  console.log(params);
  m2x_client.devices.postUpdate(device_id, params, function(response) {
      if (response.isSuccess()) {
          console.log(response.json);
      } else {
          console.log(JSON.stringify(response.error()));
      }
  });
}

module.exports = new SmartLockerM2X();
