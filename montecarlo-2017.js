var tm = Date.now();
var sims = 100000;
var persons = 50;
var coincidences = 2;

var count = 0;

for (var i = 0; i < sims; i++) {
	var a = Array.apply(null,Array(persons)).map(x=> Math.floor(Math.random()*365)+1);
	var tst = a.sort((x,y) => x-y).some((x,i) => x == a[i + coincidences-1] );
	count += tst?1:0;
}

console.log("Prob:  " + (count/sims*100));
console.log(Date.now()-tm);
