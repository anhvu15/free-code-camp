function confirmEnding(str,target){
	var sub = str.substr(str.length - target.length);
	return sub === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));