(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Calculate the sum of a half-closed Date interval
var sum = function(startDate, endDate, series) {
  var sum = 0, point, i, t;

  for (i = series.length - 1; i >= 0; --i) {
    point = series[i];
    t = point.timestamp;

    // Interval check
    if (endDate && startDate) {
      if (t >= startDate && t < endDate) {
        sum += point.value;
      }
    }
    else if (startDate) {
      if (t >= startDate) {
        sum += point.value;
      }
    }
    else if (endDate) {
      if (t < endDate) {
        sum += point.value;
      }
    }
    else {
      sum += point.value;
    }

    // Break early if possible
    if (t < startDate) {
      break;
    }
  }

  return sum;
};

module.exports = sum;

},{}],2:[function(require,module,exports){
var dateSum = require('../index');

QUnit.test( 'Calculate sum over a half-closed interval', function(assert) {
  var sum = dateSum(startDate, endDate, series);

  assert.equal(sum, 12, 'Passed!');
});

QUnit.test( 'Calculate sum with only end date specified', function(assert) {
  var sum = dateSum(undefined, endDate, series);

  assert.equal(sum, 15, 'Passed!');
});

QUnit.test( 'Calculate sum with only start date specified', function(assert) {
  var sum = dateSum(startDate, undefined, series);

  assert.equal(sum, 60, 'Passed!');
});

QUnit.test( 'Calculate sum of the entire series', function(assert) {
  var sum = dateSum(undefined, undefined, series);

  assert.equal(sum, 63, 'Passed!');
});

var startDate = new Date("June 3, 2016 GMT-0000"),
    endDate = new Date("June 5, 2016 GMT-0000"),
    series = [
      {
        timestamp: new Date("June 1, 2016 GMT-0000"),
        value: 1
      },
      {
        timestamp: new Date("June 2, 2016 GMT-0000"),
        value: 2
      },
      {
        timestamp: new Date("June 3, 2016 GMT-0000"),
        value: 4
      },
      {
        timestamp: new Date("June 4, 2016 GMT-0000"),
        value: 8
      },
      {
        timestamp: new Date("June 5, 2016 GMT-0000"),
        value: 16
      },
      {
        timestamp: new Date("June 6, 2016 GMT-0000"),
        value: 32
      },
    ];

},{"../index":1}]},{},[2]);
