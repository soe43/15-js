var fibonacci = function(n){
    if(n == 0) return 0;
    if(n < 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
};

var gcd = function(a, b){
    while(b != 0){
	var t = b;
	b = a % b;
	a = t;
    }
    return a;
}

var randomStudent = function(){
    var list = ["Khinshan", "Poober", "AirPoober", "William", "Poober 2.0"];
    var choice = Math.floor(Math.random() * list.length);
    return list[choice];
}

console.log(fibonacci(5));
console.log(randomStudent());
console.log(gcd(11,88));
