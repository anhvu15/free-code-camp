function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var i = 0;
  while(i < str.length){
  	if (start !== str.charCodeAt(i)){
  		return String.fromCharCode(start);
  	}
  	i += 1;
  	start += 1;
  }
  
}

console.log(fearNotLetter("yz"));