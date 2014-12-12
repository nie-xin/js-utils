// Take some function and trying to invoke each in turn according to param
function dispatch(/* functions */) {
  var funs = _.toArray(arguments);
  var size = funs.length;

  return function (target /* args */) {
    var result = undefined;
    var args = _.rest(arguments);

    for (var funIndex = 0; funIndex < size; funIndex++) {
      var fun = funs[funIndex];
      result = fun.apply(fun, construct(target, args));

      if (existy(result))
        return result;
    }

    return result;
  };
}
