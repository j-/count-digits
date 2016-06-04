var ceil = Math.ceil;
var floor = Math.floor;
var log = Math.log;
var abs = Math.abs;

function countDigits (x, base) {
	return ceil(log(floor(abs(x)) + 1) / log(base || 10));
}

module.exports = countDigits;
