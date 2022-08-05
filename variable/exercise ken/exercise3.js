function exercise3(arg1, arg2, arg3) {
	let a, b, c;

	a = arg1;
	b = arg2;
	c = arg3;
	
	//kode dibawah tidak boleh diubah
	return [a, b, c]; // hasil adalah [arg1,arg2,arg3]
}

console.log(exercise3(1, 2, 3));

module.exports = exercise3;
