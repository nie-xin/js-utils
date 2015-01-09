// a simulation to coffeescript ellipses
var _slice = Array.prototype.slice;
function variadic (fn) {
	var fnLength = fn.length;		// get arg nb of fn

	if (fnLength < 1) {				// fn has no arg
		return fn;
	} else if (fnLength === 1) {	// fn has 1 arg
		return function () {
			return fn.call(this, _slice.call(arguments, 0));
		}
	} else {						// fn has more than 1 args
		return function () {
			var numberOfArgs = arguments.length,
				namedArgs = _slice.call(arguments, 0, fnLength-1),
				numberOfMissingNamedArgs = Math.max(fnLength - numberOfArgs - 1, 0),
				argPadding = new Array(numberOfMissingNamedArgs),
				variadicArgs = _slice.call(arguments, fn.length -1);

			return fn.apply(this, namedArgs.concat(argPadding).concat([variadicArgs]));
		}
	}
};

// Usage:
function binary (first, rest) {
	return [first, rest];
}

binary('one', 'two', 'three'); 	// => ['one', 'two']
variadic(binary)('one', 'two', 'three');  // => ['one', ['two', 'three']]