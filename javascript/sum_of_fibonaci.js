

function sumFibs(n){
	function fibonacci(num){
		var a = 0;
		var b = 1;
		for (var i = 0; i < num; i++) {
			var temp = a;
			a = b;
			b = temp + a;
			}
			return a;
	}
	var i = 0;
	var sum = 0;
	while(fibonacci(i)< n){
		//console.log(fibonacci(i));
		if(fibonacci(i) % 2 !== 0){
			sum += fibonacci(i);
		}
		i++;
	}
	return sum;
}

console.log(sumFibs(75025))