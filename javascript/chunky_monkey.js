function chunkArrayInGroups(arr, size) {
  // Break it up.
  var start = 0;
  var chunkyArr = [];
  while(start < arr.length){
  	chunkyArr.push(arr.slice(start,start + size));
  	start += size;
  }
  return chunkyArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));