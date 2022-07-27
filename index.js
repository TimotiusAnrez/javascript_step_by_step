/**
 *
 * Fibonaci
 *
 * definisi: angka ke n = f(n-1) + f(n-2)
 * jadi angka ke n dapetnya dari angka sebelumnya ditambah 2 angka sebelumnya
 *
 *
 * ? penjelasan untuk hansen
 *
 * * jadi fibonaci itu pada intinya adalah angka yang dimana hasil dari angka sebelumnya ditambah sama 2 angka sebelumnya
 *
 * ! contoh angka fibonaci ke 2 adalah 1
 * ! datengnya dari 1 + 0
 * ! 1 itu adalah angka sebelum fibonaci posisi ke 2
 * ! 0 itu adalah 2 angka sebelum fibonaci posisi ke 2
 * ! jadi fibonaci posisi ke 2 adalah 1 + 0 = 1
 */

function fibo(n) {
	let fib = [0, 1]; // [f0, f1]

	for (let i = 2; i <= n; i++) {
		fib.push(fib[i - 2] + fib[i - 1]); // f(n-1) + f(n-2)
	}

	return fib[n]; // f(n)
}

console.log('ini berubah karena kodenya diganti');

console.log(fibo(20));

/**
 * master => akar/ batang
 *      fibo => branch/cabang
 */
