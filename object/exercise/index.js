const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');

let siswa = {
	nama: 'Hansen', //property (Key + value)
	umur: 17,
	tinggi: 180,
	punyaPacar: false,
	punyaGebetan: false,
}; // object literaL

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.table(arr);

arr[0] = 12;

console.log(arr);

console.log(siswa.nama);

siswa.nama = 'Kenji';
siswa.tinggi = 175;

console.log(siswa);

class Siswa {
	constructor(nama, umur, tinggi, pacar, gebetan) {
		this.nama = nama;
		this.umur = umur;
		this.tinggi = tinggi;
		this.punyaPacar = pacar;
		this.punyaGebetan = gebetan;
	}

	speak() {
		return console.log(`Nama saya adalah ${this.nama}`);
	}

	makan() {
		return console.log(`Saya sedang makan`);
	}
}

let hansen = new Siswa('Hansen', 17, 180, false, false);
let kenji = new Siswa('Kenji', 17, 175, false, false);
let benneth = new Siswa('Benneth', 17, 171, false, false);

console.log(hansen.speak());
console.log(kenji.speak());
console.log(benneth.makan());

module.exports = {
	exercise1,
	exercise2,
};
