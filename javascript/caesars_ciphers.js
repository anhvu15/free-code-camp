function rot13(str){
	var unicodeValues = str.split("").map(function(element){
		return element.charCodeAt();
	});
	var result = "";
	for(var i = 0; i< unicodeValues.length; i++){
		if(unicodeValues[i] >=65 && unicodeValues[i] <= 90){
			if (unicodeValues[i] + 13 > 90){
				result += String.fromCharCode(unicodeValues[i] - 13)
			} else {
				result += String.fromCharCode(unicodeValues[i] + 13);
			}
			
		} else {
			result += String.fromCharCode(unicodeValues[i]);
		}
	}
	return result
}

console.log(rot13("SERR PBQR PNZC"));
