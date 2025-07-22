function getsum(num) {
	const string = String(num);
	let total = 0;
	for (let digit of string) {
		total += +digit;
	}
	return total;
}

console.log(getsum(1234));
