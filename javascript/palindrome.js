function palindrome(str){
	var strRemoved = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
	var strTarget = strRemoved.split("").reverse().join("");
	return strRemoved === strTarget;
}

console.log(palindrome("1 eye for of 1 eye."));