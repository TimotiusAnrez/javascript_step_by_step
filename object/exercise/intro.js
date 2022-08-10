//* Cara membuat object literal

let tim = {
	nama: 'Tim',
	umur: 26,
	tinggi: 169,
};

//? Coba buat object mengenai data diri kalian
//*

//* Memasukan properti dalam object
let murid = {};
murid.nama = 'Tim';
murid.umur = 26;
murid.tinggi = 169;

//? Coba masukan property yang mendeskripsikan kalian
let orang = {};

//* Mengakses nilai properti
let mobil = {
	merek: 'Audi',
	tipe: 'A8',
	harga: 180000,
};

function callMyBrand(brand) {
	console.log(brand);
}

callMyBrand(mobil.merek);

//? ubah merek mobil sesuai dengan merek yang kalian sukai dan log brand tersebut
//? ke terminal menggunakan fungsi callMyBrand jangan menggunakan console.log sendiri tapi gunakan fungsi callMyBrand

//* Mengubah nilai dalam properti

let siswa = {
	nama: 'Cecep',
	umur: 18,
	tinggi: 180,
};

console.log(siswa); // Disini masih Cecep

// Pergantian berubah disini
siswa.nama = 'Tim';
siswa.umur = 26;
siswa.tinggi = 169;

console.log(siswa); // Disini menjadi Tim

//? Coba ubah object siswa menjadi data diri kalian
