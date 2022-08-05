/**
 * struktur kalimat dalam bahasa indonesia adalah
 * SPOK
 *
 * buat lah kalimat dalam bahasa indonesia yang baik dan benar
 * dengan menggunakan string template literaL
 */

 const randomSentence = require('./dictionary');

 const sentenceOutput = randomSentence();
 
 function exercise2(
	 s = sentenceOutput.s,
	 p = sentenceOutput.p,
	 o = sentenceOutput.o,
	 k = sentenceOutput.k,
 ) {
	 let kalimat;
	 // jangan ubah kode diatas
	 kalimat = `${s} ${p} ${o} ${k} bersama dengan lina`;
	 // jangan ubah kode dibawah
	 return kalimat; // "ibu memarahi budi karena, <kalimat> bersama dengan lina"
 }
 
 /**
  * contoh soal
  * arg1 = "budi"
  * arg2 = "bermain"
  * arg3 = "bola"
  * arg4 = "di sore hari"
  *
  * hasil akan menjadi
  * "ibu memarahi budi karena, budi bermain bola di sore hari bersama dengan lina"
  */
 
  console.log(exercise2());
 
 module.exports = exercise2;
 