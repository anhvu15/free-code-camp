function titleCase(str) {
  var strArray = str.toLowerCase().split(" ");
  var titleStr = [];
  for(var i = 0; i < strArray.length; i++){
  	
  	titleStr.push(strArray[i].charAt(0).toUpperCase() +strArray[i].substr(1));  	
  }
  return titleStr.join(" ");
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
