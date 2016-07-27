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
