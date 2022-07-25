/**
 *
 * Fibonaci
 *
 * definisi: angka ke n = f(n-1) + f(n-2)
 * jadi angka ke n dapetnya dari angka sebelumnya ditambah 2 angka sebelumnya
 */

function fibo(n) {
	let fib = [0, 1]; // [f0, f1]

	for (let i = 2; i <= n; i++) {
		fib.push(fib[i - 2] + fib[i - 1]); // f(n-1) + f(n-2)
	}

	return fib[n]; // f(n)
}

console.log(fibo(20));

/**
 * master => akar/ batang
 *      fibo => branch/cabang
 */
