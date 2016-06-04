var ceil = Math.ceil;
var log = Math.log;

function countDigits (x, base) {
	return ceil(log(x + 1) / log(base || 10));
}

module.exports = countDigits;
