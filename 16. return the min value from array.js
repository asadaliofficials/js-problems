function getmin(arr) {
	let minval = arr.sort((a, b) => {
		return a - b;
	});
	return minval[0];
}

console.log(getmin([4, 6, 8, 1, 9, 11, -7]));
