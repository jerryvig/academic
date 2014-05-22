var getPrimes = require('./primes.js');

test('Undefined input should throw an exception.', function() {
	throws(function () {
		getPrimes(undefined);
	}, 'Undefined input throws an excpetion.');
});

test('Null input should throw an exception.', function(){
	throws(function () {
		getPrimes(null);
	});
});

test('Undefined variable input should throw an exception.', function () {
	var udef;
	throws(function () {
		getPriems(udef);
	});
});

test('A string input should throw an exception.', function () {
	throws(function () {
		getPrimes('String');
	});
});

test('An object input should throw an exception.', function () {
	throws(function () {
		getPrimes({a:'b'});
	});
});

test('A function input should throw an exception.', function () {
	throws(function () {
		getPrimes(function() {
			console.log('Hello world!');
		});
	});
});

test('n<0 input should throw an exception.', function () {
	throws(function () {
		getPrimes(-1);
	});
});

test('Input n=0 should return an empty array.', function () {
	var output = getPrimes(0);
	deepEqual(output, [], 'The output should be an empty array.');
});

test('Input n=1 should return the array [1].', function () {
	var output = getPrimes(1);
	deepEqual(output, [1], 'It should return the array [1] with n=1.');
});

test('Input n=2 should return the array [1, 2].', function () {
	var output = getPrimes(2);
	deepEqual(output, [1, 2], 'It should return the array [1, 2] with n=2.');
});

test('Input n=3 should return the array [1, 2, 3].', function () {
	var output = getPrimes(3);
	deepEqual(output, [1, 2, 3], 'It should return the array [1, 2, 3] with n=3.');
});

test('Input n=5 should return the array [1, 2, 3, 5, 7].', function () {
	var output = getPrimes(5),
		expected = [1, 2, 3, 5, 7];
	deepEqual(output, expected, 'It should return [1, 2, 3, 5, 7].');
});

test('Input n=10 should return [1, 2, 3, 5, 7, 11, 13, 17, 19, 23].', function () {
	var output = getPrimes(10),
		expected = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
	deepEqual(output, expected, 'It should return [1, 2, 3, 5, 7, 11, 13, 17, 19, 23].');
});