const testExercise = require('./index');
const randomSentence = require('./dictionary');

const random1 = randomSentence();
const random2 = randomSentence();
const random3 = randomSentence();
const random4 = randomSentence();
const random5 = randomSentence();

test('exercise 1: String concat exercise', () => {
	expect(
		testExercise.exercise1(random1.s, random1.p, random1.o, random1.k),
	).toEqual(`${random1.s} ${random1.p} ${random1.o} ${random1.k}`);
});

test('exercise 2: String template exercise', () => {
	expect(
		testExercise.exercise2(random2.s, random2.p, random2.o, random2.k),
	).toEqual(
		`Ibu memarahi Budi karena, ${random2.s} ${random2.p} ${random2.o} ${random2.k} bersama dengan lina`,
	);
});

test('exercise 3: String index exercise', () => {
	expect(
		testExercise.exercise3(random3.s, random3.p, random3.o, random3.k),
	).toEqual(
		`${random3.s[2]}${random3.p[0]}${random3.o[1]}${random3.k[0]}${random3.s[0]}${random3.o[1]}${random3.k[2]}`,
	);
});

test('exercise 4: Escaping sequence in string 1', () => {
	expect(
		testExercise.exercise4(random4.s, random4.p, random4.o, random4.k),
	).toEqual(`\n ${random4.s} \n ${random4.p} \n ${random4.o} \n ${random4.k}`);
});

test('exercose 5: Escaping sequence in string 2', () => {
	expect(
		testExercise.exercise5(random5.s, random5.p, random5.o, random5.k),
	).toEqual(
		`\t ${random5.s} \n\t ${random5.p} \n\t ${random5.o} \n\t ${random5.k}`,
	);
});
