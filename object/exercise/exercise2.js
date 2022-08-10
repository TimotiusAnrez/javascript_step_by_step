/**
 * buat sebuah fungsi untuk membantu andri menyetok toko serba ada nya dia
 *
 * coba buat object untuk mengelompokan barang dari kategori barang
 * dengan isi object
 *      - Nama Barang
 *      - Jumlah Barang
 *      - Harga Barang (dalam format, harga / kg)
 *
 * bentuk hasil object
 * {
 * 	itemName:"ASASDASD"
 * 	itemQuantity:2132132
 * 	itemPrice:1321321321
 * }
 */

let stockToko = [];
let sayuran = [];
let buah = [];
let bumbu = [];

function exercise2(kategori, namaBarang, jumlahBarang, hargaBarang) {
	//buat object barang disini
	//lalu push object barang ke array sesuai dengan kategori yang dimasukan
}
//jangan ubah kode dibawah
exercise2(sayuran, 'Kol Ungu', 1000, 10000);
exercise2(sayuran, 'Kembang Kol', 1000, 13000);
exercise2(sayuran, 'Daun Bawang Besar', 100, 12000);
exercise2(sayuran, 'Daun Bwang Kecil', 1000, 10000);
exercise2(bumbu, 'Bawang Merah', 10000, 25000);
exercise2(bumbu, 'Bawang Putih', 1000, 30000);
exercise2(buah, 'jeruk', 10000, 8550);
exercise2(buah, 'Apel', 10000, 12530);
exercise2(buah, 'Nanas', 10000, 15000);
stockToko.push(sayuran, buah, bumbu);
module.exports = stockToko;
