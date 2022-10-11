Array.prototype.myFilter = function (cb) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (cb.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
