function exercise5(arg1, arg2, arg3) {
	

	arg1 %= 3;
	arg2 %= 3;
	arg3 %= 3;

	


	console.log(arg1,arg2,arg3);
	


	//kode dibawah tidak boleh diubah
	return [arg1, arg2, arg3]; // hasil harus sisa dari pembagian 3 dari semua element
}


exercise5(20,20,60);
module.exports = exercise5;
