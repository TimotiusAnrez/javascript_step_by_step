function exercise4(arg1, arg2, arg3) {
	let a = arg1;
	var b = arg2;
	const c = arg3;

	a += 1;
	b += 29;
	c += 16;

	//kode dibawah tidak boleh diubah
	return [a, b, c]; //hasil adalah [arg1+20,arg2+30,arg3+69]
}

module.exports = exercise4;
