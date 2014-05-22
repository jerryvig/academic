/**
 *  Prime number generator.
 *
 *  @author Jerry Vigil
 *  @param {integer} n - The number of prime numbers that the user wants to be returned from the function
 */
function getPrimes (n) {
	if (n === undefined) {
		throw 'Input cannot be undefined.';
	}

	if (isNaN(parseInt(n))) {
		throw ('"' + n + '" cannot be parsed to an integer.');
	}

	if (parseInt(n) !== parseFloat(n)) {
		throw ('"' + n + '" is not an integer.');
	}

	if (n < 0) {
		throw 'Input must be a positive integer.';
	}

	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [1];
	}

	var primes = [1, 2],
		i,
		j,
		MAX_NUMBER = 1000000,
		isPrime;

	if (n === 2) {
		return primes;
	}

	for (i=3; i<MAX_NUMBER; i++) {
		isPrime = true;

		for (j=1; j<primes.length; j++) {
			if (i % primes[j] === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			primes.push(i);

			if (primes.length === n) {
				break;
			}
		}
	}

	return primes;
}

module.exports = getPrimes;