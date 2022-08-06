/**
 * String pun bisa di index layaknya seperti array
 *
 * Coba manipulasikan string sesuai output yang diminta
 */

const randomSentence = require('./dictionary');

const sentenceOutput = randomSentence();

function exercise3(
	s = sentenceOutput.s,
	p = sentenceOutput.p,
	o = sentenceOutput.o,
	k = sentenceOutput.k,
) {
	let kalimat;
	//kode diatas jangan diubah
	kalimat = s[2] + p[0] + o[1] + k[0] + s[0] + o[1] + k[2];
	//kode dibawah jangan diubah
	return kalimat;
}

console.log(exercise3());
module.exports = exercise3;

/**
 * output yang diharapkan kumpulan huruf dari
 *
 * huruf ketiga dari s
 * huruf pertama dari p
 * huruf kedua dari o
 * huruf pertama dari k
 * huruf pertama dari s
 * huruf kedua dari o
 * huruf ketiga dari k
 */
