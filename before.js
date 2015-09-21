Function.prototype.before = function(beforeFn) {
  var _self = this;

  return function() {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  }
};

// test
var func = function() {
  console.log(2);
};

func = func.before(function() {
  console.log(1);
});

func();
