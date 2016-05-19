function destroyer(arr) {
  var destroyedArray = arguments[0];
  
  for (var i = 1; i < arguments.length; i++) {
  	while(destroyedArray.indexOf(arguments[i]) !== -1){
  		destroyedArray.splice(destroyedArray.indexOf(arguments[i]),1);  	
  	}
  	
  }
  return destroyedArray;
 }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));