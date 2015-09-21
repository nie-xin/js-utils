var currying = function(fn) {
  var args = [];

  return function() {
    if (arguments.length === 0) {   // resolve the function if no more args pass in
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
};


// test
var cost = (function() {
  var money = 0;

  return function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i];
    }
    return money;
  }
})();

var cost = currying(cost);
cost(100);
cost(100);
cost(200);
console.log(cost());
