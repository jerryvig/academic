test('no input passed to isAnagram should return false', function() {
	var str = new String('abc');
	ok(!str.isAnagram(), 'empty input does not return false');
});

test('cba should be an anagram of abc', function () {
	var abc = new String('abc');
	ok(abc.isAnagram('cba'), 'cba should be an anagram of abc');
});

test('abc should be an anagram of itself', function() {
	var abc = new String('abc');
	ok(abc.isAnagram('abc'), 'abc is not an anagram of itself');
});