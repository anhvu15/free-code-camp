function whereAreYou(collection, source) {
	var arr = [];
	//define a comparision function

	function isSame(target){
		var comparedKeys = Object.keys(source);
		var found = true;
		comparedKeys.forEach(function(element){
			if (target[element] !== source[element]) {
				found = false;
			}
		})
		return found;
	}

	collection.forEach(function(element){
		if (isSame(element)) {
			arr.push(element);
		}
	})
	return arr;
}

console.log(whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));