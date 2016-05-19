function getIndexToIns(arr,num) {
	// sort the array ascending
	arr.sort(function(a,b){return a-b;});
	// when num is smaller than the smallest
	// console.log(arr);
	// if(num <= arr[0]){
	// 	return 0;
	// }
	// if (num >= arr[arr.length -1]) {
	// 	return arr.length -1;
	// }
	var index = 0;
	while(num > arr[index] && index < arr.length){
		index += 1;
	}
	return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// function getIndexToIns(arr,num) {
// 	// sort the array ascending
// 	arr.sort(function(a,b){return a-b;});
// 	// when num is smaller than the smallest
// 	console.log(arr);
// 	if(num <= arr[0]){
// 		return 0;
// 	}
// 	if (num >= arr[arr.length -1]) {
// 		return arr.length;
// 	}
// 	var index = 0;
// 	while(num > arr[index]){
// 		index += 1;
// 	}
// 	return index;
// }