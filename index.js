var ceil = Math.ceil;
var log = Math.log;
var abs = Math.abs;

function countDigits (x, base) {
	return ceil(log(abs(x) + 1) / log(base || 10));
}

module.exports = countDigits;
