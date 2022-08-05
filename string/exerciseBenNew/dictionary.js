let sDictionary = ['adi', 'budi', 'cecep', 'dede', 'eny', 'fang fang'];

let pDicitionary = [
	'bermain',
	'makan',
	'memikirkan',
	'menulis',
	'membeli',
	'memarahi',
	'menjual',
];

let oDictionary = [
	'bola',
	'raket',
	'rendang',
	'telor',
	'sayur',
	'puisi',
	'cerita',
	'soal',
];

let kDictionary = [
	'di lapangan',
	'di rumah',
	'di jalan',
	'di pasar',
	'di sekolah',
];

function randomSentence() {
	return {
		s: sDictionary[Math.floor(Math.random() * sDictionary.length)],
		p: pDicitionary[Math.floor(Math.random() * pDicitionary.length)],
		o: oDictionary[Math.floor(Math.random() * oDictionary.length)],
		k: kDictionary[Math.floor(Math.random() * kDictionary.length)],
	};
}

module.exports = randomSentence;
