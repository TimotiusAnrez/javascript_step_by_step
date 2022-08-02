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

	kalimat = s[0] + p[2] + o[1] + k[2] + s[1] + o[1] + k[2];

	return kalimat;
}

module.exports = exercise3;

/**
 * output yang diharapkan kumpulan huruf dari
 *
 * huruf pertama dari s
 * huruf ketiga dari p
 * huruf kedua dari o
 * huruf ketiga dari k
 * huruf kedua dari s
 * huruf kedua dari o
 * huruf ketiga dari k
 */
