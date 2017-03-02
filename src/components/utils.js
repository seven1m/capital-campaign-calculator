exports.getWeeklyAmount = function(resource) {
  if (resource.weekly) {
    return parseInt(resource.weekly, 10)
  }
}

exports.getYearlyAmount = function(resource) {
  if (resource.yearly) {
    return parseInt(resource.yearly, 10)
  } else if (resource.weekly) {
    return parseInt(resource.weekly, 10) * 52
  }
}

exports.getFullAmount = function(resource) {
  if (resource.full) {
    return parseInt(resource.full, 10)
  } else if (resource.yearly) {
    return parseInt(resource.yearly, 10) * 3
  } else if (resource.weekly) {
    return parseInt(resource.weekly, 10) * 52 * 3
  }
}
