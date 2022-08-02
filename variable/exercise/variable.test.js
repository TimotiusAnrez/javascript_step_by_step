const exerciseTest = require('./index');

let random1, random2, random3;

random1 = Math.floor(Math.random() * 20);
random2 = Math.floor(Math.random() * 40);
random3 = Math.floor(Math.random() * 60);

test('exercise 1: Basic compound operator', () => {
	expect(exerciseTest.exercise1(random1, random2, random3)).toStrictEqual([
		random1 + 18,
		random2 + 30,
		random3 + 91,
	]);
});

test('exercise 2: Variable name check', () => {
	expect(exerciseTest.exercise2(random1, random2, random3)).toStrictEqual([
		random1,
		random2,
		random3,
	]);
});

test('exercise 3: Unitialized variable', () => {
	expect(exerciseTest.exercise3(random1, random2, random3)).toStrictEqual([
		random1,
		random2,
		random3,
	]);
});

test('exercise 4: Declare readonly variable with const keywords', () => {
	expect(exerciseTest.exercise4(random1, random2, random3)).toStrictEqual([
		random1 + 20,
		random2 + 48,
		random3 + 69,
	]);
});

test('exercise 5: Problem solving', () => {
	expect(exerciseTest.exercise5(random1, random2, random3)).toStrictEqual([
		random1 % 3,
		random2 % 3,
		random3 % 3,
	]);
});
