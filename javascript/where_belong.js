function getIndexToIns(arr, num) {
  // sort the array
  arr.sort();
  var position = 0;
  for(var i = 0; i < arr.length; i++){
  	if (num >= arr[i] && num < arr[i+1]) {
  		position = i+1;
  	}
  }
  return position;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));