count-digits
============

[![master branch build status][build-icon]][build-link]

Counts the digits of an integer in any base.

## Usage

```
countDigits(value[, base=10])
```

## Example

```js
var countDigits = require('count-digits');

countDigits(100);  // => 3
countDigits(1000); // => 4
countDigits(1e4);  // => 5
countDigits(0xff, 16); // => 2
countDigits(0xff, 2);  // => 8
```

## Installing

```sh
$ npm install --save count-digits
```

## Notes

### Zero

Zero is a special case when counting digits. Be aware that `countDigits(0)` will return `0` where you might be expecting `1`.

### Floats

Since only whole values are counted, `countDigits(Math.PI)` will return `1`.

## License

MIT.

[build-icon]: https://travis-ci.org/j-/count-digits.svg?branch=master
[build-link]: https://travis-ci.org/j-/count-digits
