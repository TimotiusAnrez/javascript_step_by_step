/**
 *
 * Pada suatu hari di Mcd deket Binus Kemanggisan
 *
 * Benneth ingin makan siang big mac jadi pergi ke mcd setelah kelas pagi
 * ternyata setelah masuk ke mcd sudah ada Illya, Allya, dan Kenji ngantri untuk beli makanan
 * Untuk kenyamanan bersama maka Benneth harus ikutan antri
 *
 * Hansen juga ingin makan mcd untuk makan siang
 * karena dia nanya dosen dulu sebelum ke mcd dia dateng setelah benneth
 *
 * David juga ingin makan mcd, karena dia bolos dari kelas dia dateng sebelum benneth
 *
 * Disaat David Dateng ternyata Illya mengambil makanan
 * Disaat Benneth Dateng ternyata Allya mengambil makanan
 * Disaat Hansen Dateng Kenji ternyata Kenji mengambil makanan
 *
 * ? simulasikan antrian dengan baik
 * ? bagaimana situasi antrian setelah Hansen datang?
 *
 * ! Ingat demi kenyamanan bersama semua orang harus antri
 *
 * hint: Baca mengenai data structure queue
 *
 */

//! hanya tulis kode didalam fungsi diluar fungsi tidak boleh diubah
//? untuk tes fungsi kalian benar atau tidak tinggal dijalankan
//? console.log sudah disediakan dan sudah sesuai urutan soal
//? kalian cukup membuat progam untuk antrian berfungsi dengan baik

let antrianMcd = ['Illya', 'Allya', 'Kenji'];

function exercise3(antrian, orang) {
	//kode diatas tidak boleh diubah

	//kode dibawah tidak boleh diubah
	return antrian;
}
//kode dibawah tidak boleh diubah
exercise3(antrianMcd, 'David');
exercise3(antrianMcd, 'Benneth');
exercise3(antrianMcd, 'Hansen');

console.log(antrianMcd); // output akan menjadi ini

// const result = (arr = antrianMcd) => arr;
module.exports = exercise3;
