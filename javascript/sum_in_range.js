function sumAll(arr) {
  var min = arr.min();
  var max = arr.max();
  var total = 0;
  for(var i = min; i <= max; i++ ){
  	total += i;
  }
  return total;
}