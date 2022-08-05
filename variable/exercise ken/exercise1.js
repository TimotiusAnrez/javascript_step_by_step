function exercise1(arg1, arg2, arg3) {
	let a, b, c;

	a = arg1;
	b = arg2;
	c = arg3;

	//kode diatas tidak boleh diubah
	a += 2; 
	b += 10;
	c += 43;
	
	//kode dibawah tidak boleh diubah
	a += 16;
	b += 20;
	c += 48;

	return [a, b, c]; //hasil harus menjadi [arg1+18,arg2+30,arg3+91]
}
console.log(exercise1(0,0,0));
module.exports = exercise1;
