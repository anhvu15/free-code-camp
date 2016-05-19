function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num){
  	return str.slice(0,num) + '...';
  } else {
  	return str;
  }
}
console.log("Hello");
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
