import test from 'ava';
import countDigits from '..';

test('Can count zero', (t) => {
	t.is(countDigits(0), 0);
});

test('Can count numbers less than 10', (t) => {
	t.is(countDigits(1), 1);
	t.is(countDigits(2), 1);
	t.is(countDigits(3), 1);
	t.is(countDigits(4), 1);
	t.is(countDigits(5), 1);
	t.is(countDigits(6), 1);
	t.is(countDigits(7), 1);
	t.is(countDigits(8), 1);
	t.is(countDigits(9), 1);
});

test('Can count numbers less than 100', (t) => {
	t.is(countDigits(10), 2);
	t.is(countDigits(15), 2);
	t.is(countDigits(20), 2);
	t.is(countDigits(25), 2);
	t.is(countDigits(50), 2);
	t.is(countDigits(90), 2);
	t.is(countDigits(95), 2);
	t.is(countDigits(99), 2);
});

test('Can count numbers less than 1000', (t) => {
	t.is(countDigits(100), 3);
	t.is(countDigits(150), 3);
	t.is(countDigits(200), 3);
	t.is(countDigits(250), 3);
	t.is(countDigits(500), 3);
	t.is(countDigits(900), 3);
	t.is(countDigits(950), 3);
	t.is(countDigits(999), 3);
});

test('Can count numbers less than 100000000000000', (t) => {
	t.is(countDigits(1e0), 1, '1e0');
	t.is(countDigits(1e1), 2, '1e1');
	t.is(countDigits(1e2), 3, '1e2');
	t.is(countDigits(1e3), 4, '1e3');
	t.is(countDigits(1e4), 5, '1e4');
	t.is(countDigits(1e5), 6, '1e5');
	t.is(countDigits(1e6), 7, '1e6');
	t.is(countDigits(1e7), 8, '1e7');
	t.is(countDigits(1e8), 9, '1e8');
	t.is(countDigits(1e9), 10, '1e9');
	t.is(countDigits(1e10), 11, '1e10');
	t.is(countDigits(1e11), 12, '1e11');
	t.is(countDigits(1e12), 13, '1e12');
	t.is(countDigits(1e13), 14, '1e13');
	t.is(countDigits(1e14), 15, '1e14');

	// 1e15 exceeds limit
	// Floating point precision errors start
	// to cause invalid results at this point
	t.skip.is(countDigits(1e15), 16, '1e16');
});

test('Can count negative numbers', (t) => {
	t.is(countDigits(-0), 0);
	t.is(countDigits(-1), 1);
	t.is(countDigits(-9), 1);
	t.is(countDigits(-10), 2);
	t.is(countDigits(-99), 2);
	t.is(countDigits(-100), 3);
	t.is(countDigits(-999), 3);
	t.is(countDigits(-1000), 4);
	t.is(countDigits(-9999), 4);
	t.is(countDigits(-10000), 5);
	t.is(countDigits(-99999), 5);
});

test('Can count negative numbers', (t) => {
	t.is(countDigits(-0), 0);
	t.is(countDigits(-1), 1);
	t.is(countDigits(-9), 1);
	t.is(countDigits(-10), 2);
	t.is(countDigits(-99), 2);
	t.is(countDigits(-100), 3);
	t.is(countDigits(-999), 3);
	t.is(countDigits(-1000), 4);
	t.is(countDigits(-9999), 4);
	t.is(countDigits(-10000), 5);
	t.is(countDigits(-99999), 5);
});

test('Can count infinity', (t) => {
	t.is(countDigits(Infinity), Infinity);
	t.is(countDigits(-Infinity), Infinity);
});

test('Does not count NaN', (t) => {
	t.truthy(isNaN(countDigits(NaN)));
});

test('Can count base 2 numbers', (t) => {
	t.is(countDigits(0b1, 2), 1, '1');
	t.is(countDigits(0b10, 2), 2, '10');
	t.is(countDigits(0b11, 2), 2, '11');
	t.is(countDigits(0b100, 2), 3, '100');
	t.is(countDigits(0b111, 2), 3, '111');
	t.is(countDigits(0b1000, 2), 4, '1000');
	t.is(countDigits(0b1111, 2), 4, '1111');
	t.is(countDigits(0b10000, 2), 5, '10000');
	t.is(countDigits(0b11111, 2), 5, '11111');
});

test('Can count base 8 numbers', (t) => {
	t.is(countDigits(0o1, 8), 1, '1');
	t.is(countDigits(0o7, 8), 1, '7');
	t.is(countDigits(0o10, 8), 2, '10');
	t.is(countDigits(0o77, 8), 2, '77');
	t.is(countDigits(0o100, 8), 3, '100');
	t.is(countDigits(0o777, 8), 3, '777');
	t.is(countDigits(0o1000, 8), 4, '1000');
	t.is(countDigits(0o7777, 8), 4, '7777');
	t.is(countDigits(0o10000, 8), 5, '10000');
	t.is(countDigits(0o77777, 8), 5, '77777');
});

test('Can count base 10 numbers', (t) => {
	t.is(countDigits(1, 10), 1, '1');
	t.is(countDigits(9, 10), 1, '9');
	t.is(countDigits(10, 10), 2, '10');
	t.is(countDigits(99, 10), 2, '99');
	t.is(countDigits(100, 10), 3, '100');
	t.is(countDigits(999, 10), 3, '999');
	t.is(countDigits(1000, 10), 4, '1000');
	t.is(countDigits(9999, 10), 4, '9999');
	t.is(countDigits(10000, 10), 5, '10000');
	t.is(countDigits(99999, 10), 5, '99999');
});

test('Can count base 16 numbers', (t) => {
	t.is(countDigits(0x1, 16), 1, '1');
	t.is(countDigits(0xf, 16), 1, 'f');
	t.is(countDigits(0x10, 16), 2, '10');
	t.is(countDigits(0xff, 16), 2, 'ff');
	t.is(countDigits(0x100, 16), 3, '100');
	t.is(countDigits(0xfff, 16), 3, 'fff');
	t.is(countDigits(0x1000, 16), 4, '1000');
	t.is(countDigits(0xffff, 16), 4, 'ffff');
	t.is(countDigits(0x10000, 16), 5, '10000');
	t.is(countDigits(0xfffff, 16), 5, 'fffff');
});
