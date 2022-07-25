const arrayBasic = require('./index');

test('testing basic array operation', () => {
	let arr = ['bawang putih', 'bawang bombay', 'daun bawang'];

	expect(arrayBasic(arr)).toStrictEqual(['bawang merah', 'tomat', 'kentang']);
});
