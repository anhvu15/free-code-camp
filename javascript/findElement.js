function findElement(arr,func){
	for(var i = 0; i < arr.length; i++){
		if (func(arr[i])) {
			return arr[i];
		}
	}
}

console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));