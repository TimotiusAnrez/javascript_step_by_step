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

//	pertama semua nama yang ada di list harus di split
// looping semua nama di dalam list
// setiap nama harus di split
// lalu masukan nama yang sudah di split ke variable yang baru
//	data yang baru harus di filter karena ingin cari nama yang sesuai sama kriteria
//	cek semua element di dalam array baru untuk nama belakang nya
//  bila nama belakang huruf pertama sesuai sama kriteria masukan nama nya kedalam array baru
// kalau sudah selesai return array yang baru
// gimana caranya supaya kita SELALU cek nama yang paling belakang

function exercise5(arr, alphabetNamaBelakang) {
	let splitList, newList;
	//jangan ubah kode diatas
	splitList = arr.map((element) => element.split(' '));
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
console.log(exercise5(listNama, 'K')); // hasil menjadi [['Rizky', 'Amelia'],['Shakilla', 'Astari'],['Zara', 'Arumi']]

module.exports = exercise5;
