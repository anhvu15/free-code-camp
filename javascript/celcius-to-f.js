function convert(celcius) {
	var faherein = celcius * 9/5 + 32;
	if (typeof faherein !== undefined) {
		return faherein;
	}else{
		return 'faherein is not defined';
	}
}

console.log(convert(0));
console.log(convert(-30));
console.log(convert(-10));
console.log(convert(0));
console.log(convert(20));
console.log(convert(30));