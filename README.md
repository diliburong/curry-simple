# curry
> Curry a function.
## Install
```bash
npm install curry-simple
```

## Usage

```js
const curry = require('../index.js');


const multiFn = (a, b, c) => a * b * c
var multi = curry(multiFn);
multi(2)(3)(4)) // => 24

var add = curry(function (a, b) { return a + b });
add(1, 2) // => 3
add1(2) // => 3


var zipAddWith = curry(function (a, b) {
    return a.map(function (val, i) { return val + b[i] });
});

var zipAddWith123 = zipAddWith([1, 2, 3]);

zipAddWith([1, 2, 3], [1, 2, 3]) // => [2, 3, 6]
zipAddWith123([5, 6, 7]) // => [6, 8, 10]

```




