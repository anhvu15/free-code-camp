function truthCheck(collection,pre){
	// loop through collection
	for (var i = 0; i < collection.length; i++) {
		if (collection[i][pre]=== undefined) {
			return false;
		}
	}
	return true;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));