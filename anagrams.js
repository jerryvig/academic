String.prototype.isAnagram = function (testString) {
	'use strict';
	if (typeof testString === 'string' || testString instanceof String) {
		if (testString.length !== this.length) {
			return false;
		} 

		var thisArray = this.split(''),
			testStringArray = testString.split(''),
			thisCharCounts = {},
			testStringCharCounts = {},
			i,
			character;

		for (i=0; i<thisArray.length; i++) {
			if (thisCharCounts[thisArray[i]] === undefined) {
				thisCharCounts[thisArray[i]] = 0;
			}

			thisCharCounts[thisArray[i]]++;

			if (testStringCharCounts[testStringArray[i]] === undefined) {
				testStringCharCounts[testStringArray[i]] = 0;
			}

			testStringCharCounts[testStringArray[i]]++;
		}

		for (character in thisCharCounts) {
			if (thisCharCounts[character] !== testStringCharCounts[character]) {
				return false;
			}
		}

		//If you make it here, you can return true.
		return true;
	}

	return false;
};