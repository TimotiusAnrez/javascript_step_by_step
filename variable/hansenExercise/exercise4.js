function exercise4(arg1, arg2, arg3) {
	let a = arg1;
	var b = arg2;
	const c = arg3 + 69;

	a += 1;
	b += 29;

	a += 19;
	b += 19;

	//kode dibawah tidak boleh diubah
	return [a, b, c]; //hasil adalah [arg1+20,arg2+48,arg3+69]
}
console.log(exercise4(0, 0, 0));
module.exports = exercise4;

// bagaimana a += 1 diubah menjadi a += 20
// bagaimana b += 29 diubah menjadi b += 48
// bagaimana c += 0 diubah menjadi c += 69
// ubah value  const
