// Given a quantity of 'people', find the probability that at least 'shared' of them share birthdays
var tm = Date.now();
var d = 365; //days in a year
var v = []; //array of random birthdays
var prob = 0;
var MCRuns = 100000;
var people = 50;
var shared = 2;

for (var mc = 0; mc < MCRuns; mc++){
	// random sample of people persons
	for(var i = 0; i < people; i++){
		v.push(Math.floor(Math.random()*d));
	}
	var ok = false;

	//check each element for repetitions
	while (v.length > 1 & !ok){
		var cuenta = 1;
		var vtemp = v[0];
		v.splice(0,1);  //v.shift(); works as well
		var j = 0;

		while(j < v.length){
			if(v[j] === vtemp){
				v.splice(j,1);
				cuenta++;
			}else{
				j++;
			}
		}

		if (cuenta >= shared){
			ok = true;
		}
	}

	if(ok){
		prob++;
	}

	v = [];
	ok = false;
}


console.log("Probability:" + Math.round( prob / MCRuns * 100 ));
console.log(Date.now() - tm);

//Tiempo:  545ms Chrome para 100K
//Tiempo:  422ms Node para 100K
//Tiempo:  FF para 100K no termina en tiempo razonable
//Tiempo:  17323ms FF para 10K
