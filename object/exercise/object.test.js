const testExercise = require('./index');

test('Exercise 1 = Object literal basic', () => {
	let answerList = [];
	let studentList = [];

	function test1(nama, gender, umur, kelas) {
		let student = { nama, gender, umur, kelas };
		answerList.push(student);
	}

	test1('Adi', 'Laki - Laki', 15, 'IPS 1');
	test1('Andri', 'Laki - Laki', 15, 'IPA 1');
	test1('Budi', 'Laki - Laki', 15, 'IPA 3');
	test1('Cecep', 'Laki - Laki', 15, 'IPS 2');
	test1('Devina', 'Perempuan', 15, 'IPS 1');
	test1('Ellyn', 'Perempuan', 15, 'IPA 2');
	test1('Fajar', 'Perempuan', 15, 'IPA 3');

	expect(testExercise.exercise1).toStrictEqual(studentList);
});
