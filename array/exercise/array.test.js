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
	let queue = [''];
	expect(antrianMcd).toStrictEqual(['David', 'Benneth', 'Hansen']);
});
