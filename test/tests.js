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
