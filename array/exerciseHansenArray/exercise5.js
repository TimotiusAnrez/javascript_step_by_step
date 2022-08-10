/**
 * Di FYP Binus dibagi kelompok sesuai dengan alphabet nama belakang
 *
 * Hint baca dan tonton :
 * Array Filter Javascript
 * Split String Javascript
 * Tenary Operator
 */

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

// Pertama, semua nama yang ada di list harus di split
// loopinhg semua nama di dalam list
// setiap nama harus di spilt
// lalu masukan nama yang sudah di spilt ke variable yang baru
// data yang baru harus di filter karena ingin mencari nama yang sesuai
// cek semua element di dalam array baru untuk nama belakangnya
// bila nama belakang huruf pertama sesuai dengan kriteria masukan
// kalau sudah selesai return array yang baru
// pertanyaannya gimana caranya agar kita SELALU cek nama yang paling belakang

function exercise5(arr, alphabetNamaBelakang) {
	let splitList, newList;
	//jangan ubah kode diatas
	splitList = arr.map((element) => element.split(' '));
	console.log(splitList);
	newList = splitList.filter((element) => {
		if (element[element.length - 1][0] === alphabetNamaBelakang) {
			return element;
		}
	});
	// jangan ubah kode dibawah
	return newList;
}

console.log(exercise5(listNama, 'G')); //hasil menjadi [ [ 'Chintya', 'Gabriella' ], [ 'Nabila', 'Gardena' ] ]
console.log(exercise5(listNama, 'P')); // hasil menjadi [ [ 'Aghnia', 'Punjabi' ], [ 'Indah', 'Nada','Puspita' ] ]
console.log(exercise5(listNama, 'A'));
console.log(exercise5(listNama, 'N'));
console.log(exercise5(listNama, 'E'));
console.log(exercise5(listNama, 'I'));
console.log(exercise5(listNama, 'M'));
console.log(exercise5(listNama, 'H'));
console.log(exercise5(listNama, 'T'));
console.log(exercise5(listNama, 'K'));

module.exports = exercise5;
