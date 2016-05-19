function sumPrimes(num) {
  
 	var total = 0;
 	function isPrime(a){
 		if(a === 2){
 			return true;
 		}
 		for (var i = 2; i < a; i++) {
 			if(a % i === 0){
 				return false;
 			}
 		}
 		return true;
 	}
 	for (var i = 2; i <= num; i++) {
 		if (isPrime(i)) {
 		  console.log(i);	
          total += i;
 		}
 	}
 	return total;
}

console.log(sumPrimes(977));