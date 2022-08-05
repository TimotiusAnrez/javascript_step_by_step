const randomSentence = require('./dictionary');

const sentenceOutput = randomSentence();

/**
 * escaping sequence in string
 */

function exercise4(
	s = sentenceOutput.s,
	p = sentenceOutput.p,
	o = sentenceOutput.o,
	k = sentenceOutput.k,
) {
	let kalimat;
	//jangan ubah kode diatas
	kalimat = `\n ${s} \n ${p} \n ${o} \n ${k}`;
	//jangan ubah kode dibawah
	return kalimat;
}

/**
 * output yang diharapkan
 *
 * "
 *  budi
 *  bermain
 *  bola
 *  di rumah
 * "
 */
 console.log(exercise4());
module.exports = exercise4;
