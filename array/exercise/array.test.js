const testExercise = require('./index');

test('Exercise 1 = Assign value to array element', () => {
	expect(testExercise.exercise1()).toStrictEqual([
		'Nadya',
		'Andri',
		'Illya',
		'Alya',
	]);
});

test('Exercise 2 = Array method (push)', () => {
	const lapakSayur = [
		'Tomat',
		'Kailan',
		'Jamur Kuping',
		'Timun',
		'Daun Bawang Kecil',
		'Daun Bawang Besar',
		'Kol',
		'Kembang Kol',
		'Terong',
		'Caisim',
		'Jamur Kancing',
		'Jamur Merang',
		'Pete',
		'Brokoli',
	];
	const lapakBumbu = [
		'Cabai Merah',
		'Bawang Bombay',
		'Bawang Merah',
		'Lengkuas',
		'Cabai Keriting',
		'Nipis',
		'Jahe',
		'Bawang Putih',
		'Cabai Rawit',
		'Cabai Hijau',
	];
	const lapakDaging = ['Sapi', 'Ayam', 'Bebek'];
	const tokoKelontong = [
		'Telor Ayam',
		'Garam',
		'Telor Bebek',
		'Micin',
		'Telor Asin Matang',
		'Telor Asin Mentah',
	];

	let tasBelanja = [];

	tasBelanja.push(lapakSayur[0]);
	tasBelanja.push(lapakSayur[10]);
	tasBelanja.push(lapakSayur[9]);
	tasBelanja.push(lapakSayur[6]);
	tasBelanja.push(lapakBumbu[7]);
	tasBelanja.push(lapakBumbu[2]);
	tasBelanja.push(lapakBumbu[8]);
	tasBelanja.push(lapakBumbu[1]);
	tasBelanja.push(lapakBumbu[6]);
	tasBelanja.push(lapakDaging[0]);
	tasBelanja.push(tokoKelontong[0]);
	tasBelanja.push(tokoKelontong[1]);
	tasBelanja.push(lapakDaging[2]);
	tasBelanja.push(lapakBumbu[8]);
	tasBelanja.push(lapakBumbu[4]);
	tasBelanja.push(lapakSayur[5]);
	tasBelanja.push(tokoKelontong[5]);

	expect(testExercise.exercise2()).toStrictEqual(tasBelanja);
});

test('Exercise 3 = Array Data Structure Queue', () => {
	let queue = ['Ria Ricis', 'Keanu Angelo', 'Anya Geraldin'];
	testExercise.exercise3(queue, 'Rachel Venya');
	testExercise.exercise3(queue, 'Karin Novilda');
	testExercise.exercise3(queue, 'Fadil Jaidi');
	expect(queue).toStrictEqual(['Rachel Venya', 'Karin Novilda', 'Fadil Jaidi']);
});

test('Exercise 4 = Array Data Structure Stack', () => {
	let stack = [1, 2, 3, 4, 5, 6];
	testExercise.exercise4(stack, [7, 8, 9, 10]);
	testExercise.exercise4(stack, [11, 12, 13, 14]);
	testExercise.exercise4(stack, [15, 16, 17, 18]);
	testExercise.exercise4(stack, [19, 20, 21, 22]);

	expect(stack).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 11, 15, 19]);
});

test('Exercise 5 = Array method exercise', () => {
	let listNama = [
		'Fay Nabila',
		'Gege Elisa',
		'Rizky Amelia',
		'Chintya Gabriella',
		'Mega Iskanti',
		'Shakilla Astari',
		'Nabila Gardena',
		'Dindra Nashriyah',
		'Aghnia Punjabi',
		'Gina Meidina',
		'Indah Nada Puspita',
		'Dwi Handayani',
		'Zara Arumi',
		'Rachel Theresia',
		'Puteri Hasanah Karunia',
	];

	function solution(arr, input) {
		let splitList, newList;
		splitList = arr.map((element) => {
			return element.split(' ');
		});

		newList = splitList.filter((element) => {
			if (element[element.length - 1][0] === input) {
				return element;
			} else {
				return;
			}
		});
		return newList;
	}

	expect(testExercise.exercise5(listNama, 'N')).toStrictEqual(
		solution(listNama, 'N'),
	);
});
