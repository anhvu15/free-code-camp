function mutation(arr){
	var long = 0;
	var short = 0;
	if (arr[0].length >= arr[1].length) {
		long = arr[0];
		short = arr[1];
	} else {
		long = arr[0];
		short = arr[1];
	}
	var isMutated = true;
	for (var i = 0; i < short.length; i++) {
		if(long.indexOf(short[i]) < 0){
			isMutated = false;
		}
	}
	return isMutated;

}