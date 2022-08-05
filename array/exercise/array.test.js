const testExercise = require('./index');

test('Exercise 1 = Assign value to array element', () => {
	expect(testExercise.exercise1()).toStrictEqual([
		'Nadya',
		'Andri',
		'Illya',
		'Alya',
	]);
});
