const curry = require('../index.js');
const assert = require('assert');

describe('curry', () => {
    it('should be curried', () => {
        var add = curry(function (a, b, c) { return a + b + c });

        assert.equal(add(1, 2, 3), add(1)(2)(3));
        assert.equal(typeof add(1), 'function');
        assert.equal(typeof add(1)(2), 'function');
        assert.equal(typeof add(1)(2)(3), 'number');
        assert.equal(typeof add(1, 2, 3), 'number');
    });

    it('should be pure', () => {
        var add = curry(function (a, b) { return a + b });
        var addOne = add(1);
        var addTwo = add(2);

        assert.equal(addOne(1), 2);
        assert.equal(addTwo(1), 3);
        assert.equal(add(1, 2), addOne(2));
        assert.equal(add(1, 2), addTwo(1));

        var zipWith = curry(function (a, b) {
            return a.map(function (val, i) { return val + b[i] });
        });
        var zipAddWith123 = zipWith([1, 2, 3]);

        assert.deepEqual(zipWith([1, 2, 3], [1, 2, 3]), zipAddWith123([1, 2, 3]))

    });

    it('should allow multiple arguments to be passed at a time', function () {
        var sum3 = curry(function (a, b, c) { return a + b + c });

        assert.equal(sum3(1, 2, 3), sum3(1, 2)(3));
        assert.equal(sum3(1, 2, 3), sum3(1)(2, 3));
        assert.equal(sum3(1, 2, 3), sum3(1)(2)(3));
    });
})
