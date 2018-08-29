const curry = require('../index.js');


function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);
console.log(multi(2)(3)(4));

var add = curry(function (a, b) { return a + b });

//-- it can be called like normal:
console.log("add: " + add(1, 2)) //= 3

var add1 = add(1);
console.log("add1：" + add1(2)) //= 3;

var zipWith = curry(function (a, b) {
    return a.map(function (val, i) { return val + b[i] });
});


var zipAddWith123 = zipWith([1, 2, 3]);

console.log(zipWith([1, 2, 3], [1, 2, 3]));
console.log(zipAddWith123([5, 6, 7]));