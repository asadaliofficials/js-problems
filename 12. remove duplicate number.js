function removeduplicates(arr) {
	let uniquearr = [...new Set(arr)];
	return uniquearr;
}

console.log(removeduplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 2, 1, 3]));
