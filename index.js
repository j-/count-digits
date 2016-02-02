const ceil = Math.ceil;
const log = Math.log;

module.exports = function countDigits (x, base) {
	return ceil(log(x + 1) / log(base || 10));
};
