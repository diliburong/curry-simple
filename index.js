'use strict';
module.exports = function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function () {
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    }
}


