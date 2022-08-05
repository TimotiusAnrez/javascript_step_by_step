function exercise4(arg1, arg2, arg3) {
	let a = arg1;
	let b = arg2;
	const c = arg3 + 69;

	a += 20;
	b += 48;

	//kode dibawah tidak boleh diubah
	return [a, b, c]; //hasil adalah [arg1+20,arg2+48,arg3+69]
}
console.log(exercise4(0,0,0))
module.exports = exercise4;