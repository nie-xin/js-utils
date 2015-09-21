Function.prototype.after = function(afterFn) {
  var _self = this;

  return function() {
    var ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
};


// test
var func = function() {
  console.log(2);
};

func = func.after(function() {
  console.log(3);
});

func();
