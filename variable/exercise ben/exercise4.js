function exercise4(arg1, arg2, arg3) {
	let a = arg1 + 19;
	var b = arg2 + 19;
	const c = arg3 + 69;

	a += 1;
	b += 29;
	


	console.log(a,b,c);

	//kode dibawah tidak boleh diubah
	return [a, b, c]; //hasil adalah [arg1+20,arg2+48,arg3+69]
}

exercise4(2,20,1);

module.exports = exercise4;
