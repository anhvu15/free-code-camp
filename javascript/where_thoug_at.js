function whereAreYou(collection, source) {
  //Empty array to get the result
  var arr = [];
  // Traverse through collection
  var comparedKeys = Object.keys(source);
  for(var i = 0; i < collection.length; i++){
  	var found = true;
  	//console.log(i +": "+collection[i]);
  	for(var j = 0; j < comparedKeys.length; j++){
  		if (!(collection[i].hasOwnProperty(comparedKeys[j]) && collection[i][comparedKeys[j]] === source[comparedKeys[j]])) {
  			found = false;
  			break;
  			}  	
  		}
  	if(found){
  		console.log(collection[i]);
  		arr.push(collection[i]);
  	}
  }
  return arr;
}

console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));