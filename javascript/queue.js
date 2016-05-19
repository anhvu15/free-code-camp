function queue(arr,item) {
	if(typeof(item) !== undefined){
		arr.push(item);
	}
	return arr.shift();
}
var myArray = [5,6,7,8,9];
queue_return = queue(myArray,1);
console.log(queue_return);
console.log(myArray);