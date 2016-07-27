Given an array of timeseries data ordered from oldest to
newest, return the sum of the values between the start and
end dates (inclusive).

If either startDate or endDate is undefined, the sum is
calculated to the start or end of the series, respectively.
If both are undefined, the sum is calculated for the entire
series.

Series data is expected to be an array of objects of the
following format:

{
  timestamp: Date,
  value: Number
}

The algorithm is weighted toward sums that favor the end of
the series array (most recent values), as it iterates from 
end to start.

## Usage

    var dateSum = require('timeseries-sum');

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

    // Calculate sum over a half-closed interval
    dateSum(startDate, endDate, series);

    // Calculate sum from the start of the interval to the end date
    dateSum(undefined, endDate, series);

    // Calculate sum from the start date to the end of the interval
    dateSum(startDate, undefined, series);

    // Calculate sum of the entire series
    dateSum(undefined, undefined, series);
