function chunkArrayInGroups(arr, size) {
  var start = 0;
  var chunkArray = [];
  while(start < arr.length){
  	chunkArray.push(arr.slice(start,start+size));
  	start += size;
  }
  return chunkArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
