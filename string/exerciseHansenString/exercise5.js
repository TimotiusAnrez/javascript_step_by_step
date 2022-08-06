const randomSentence = require('./dictionary');

const sentenceOutput = randomSentence();

/**
 * escaping sequence in string
 */

function exercise5(
	s = sentenceOutput.s,
	p = sentenceOutput.p,
	o = sentenceOutput.o,
	k = sentenceOutput.k,
) {
	let kalimat;
	//jangan ubah kode diatas
	kalimat = `\t ${s} \n\t ${p} \n\t ${o} \n\t ${k}`;
	//jangan ubah kode dibawah
	return kalimat;
}

console.log(exercise5());
/**
 * output yang diharapkan
 *
 * "
 *      budi
 *      bermain
 *      bola
 *      di rumah
 * "
 */

module.exports = exercise5;
