Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
