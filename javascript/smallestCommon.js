function smallestCommons(arr) {
	var nums = [];
	function isEvenlyDivisible(num,numArr){
		for (var i = 0; i < numArr.length; i++) {
			if (num % numArr[i] !== 0) {
				return false;
			}
		}
		return true;
	}
	var lower = 0;
	var higher = 0;
	if (arr[0] <= arr[1]) {
		lower = arr[0];
		higher = arr[1];
	} else {
		higher = arr[0];
		lower = arr[1];
	}
	for (var i = lower; i <= higher; i++) {

		nums.push(i);
	}
	
	var found = false;
	var common = 0;
	var counter = arr[0];
	while(!found){
		// console.log(counter);
		if (isEvenlyDivisible(counter,nums)) {
			found = true;
			common = counter;
			
		}
		counter += 1;
	}
	return common;
}

console.log(smallestCommons([5,1]));