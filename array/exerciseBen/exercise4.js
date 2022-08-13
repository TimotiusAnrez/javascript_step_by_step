/**
 * Kenji part time di Kantin Binus
 *
 * Kenji bisa mencuci piring 3 piring per menit
 * Karena Kantin binus sedang ramai tumpukan piring yang harus dicuci kenji menumpuk
 * jadi tumpukan piring yang kenji harus cuci bertambah 4 piring per menit
 * coba simulasikan cucian piring Kenji
 *
 * ? Hint: Belajar tentang struktur data queue
 */

let tumpukanPiring = [1, 2, 3, 4, 5, 6];

function exercise4(tumpukan, piring) {
	//jangan ubah kode diatas
	let a= piring.shift();
	
	tumpukan.push(a);
	// menarik nih problem solving nya, cuman coba di ubah simulasi nya jadi kaya stack pada umunya gunain push sama pop
	


	//jangan ubah kode dibawah
	return tumpukan;
}
// Jangan ubah kode dibawah
exercise4(tumpukanPiring, [7, 8, 9, 10]);
exercise4(tumpukanPiring, [11, 12, 13, 14]);
exercise4(tumpukanPiring, [15, 16, 17, 18]);
exercise4(tumpukanPiring, [19, 20, 21, 22]);







console.log(tumpukanPiring);
//! jalankan node exercise4.js untuk mendapatkan hasil dari fungsi kalian
// output yang benar adalah [
//      1, 2,  3,  4,  5,
//      6, 7, 11, 15, 19
//    ]
module.exports = exercise4;
