function binary(arr, n) {
	let left = 0;
	let right = arr.length - 1;
	let mid;
	while (right >= left) {
		mid = left + (right - 1) / 2;

		console.log(mid);

		if ((arr[mid] = n)) {
			return mid;
		}

		if (arr[mid] >= n) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
}

console.log(binary([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
