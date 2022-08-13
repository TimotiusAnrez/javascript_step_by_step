const testExercise = require('./index');

test('Exercise 1 = Object literal basic', () => {
	let ipa = [];
	let ips = [];
	function test1(nama, gender, umur, kelas) {
		let student = { nama, gender, umur, kelas };
		kelas.push(student);
	}

	test1('Adi', 'Laki - Laki', 15, ipa);
	test1('Andri', 'Laki - Laki', 15, ips);
	test1('Budi', 'Laki - Laki', 15, ipa);
	test1('Cecep', 'Laki - Laki', 15, ipa);
	test1('Devina', 'Perempuan', 15, ips);
	test1('Ellyn', 'Perempuan', 15, ipa);
	test1('Fajar', 'Perempuan', 15, ips);
	let studentList = [ipa, ips];
	expect(testExercise.exercise1).toStrictEqual(studentList);
});

test('Exercise 2 = Object in array', () => {
	let stockToko = [];
	let sayuran = [];
	let buah = [];
	let bumbu = [];

	function exercise2(kategori, namaBarang, jumlahBarang, hargaBarang) {
		let item = {
			itemName: namaBarang,
			itemQuantity: jumlahBarang,
			itemPrice: hargaBarang,
		};
		kategori.push(item);
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

	expect(testExercise.exercise2).toStrictEqual(stockToko);
});
