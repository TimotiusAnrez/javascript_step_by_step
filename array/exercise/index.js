const exercise1 = require('./exercise1');
const exercise2 = require('./exercise2');
const exercise3 = require('./exercise3');
const exercise4 = require('./exercise4');
const exercise5 = require('./exercise5');

let antrianBk = ['Kevin', 'Jennifer', 'Agus'];
exercise3(antrianBk, 'Daniel');
exercise3(antrianBk, 'Budi');
exercise3(antrianBk, 'Cecep');

console.log(antrianBk);
module.exports = {
	exercise1,
	exercise2,
	exercise3,
	exercise4,
	exercise5,
};
