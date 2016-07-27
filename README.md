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


