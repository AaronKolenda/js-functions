/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/

function max(a, b) {
 if (a >= b) {
 	return a;
 } else return b;

}

/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

/* This is the first function I wrote before I read the directions

function maxOfThree(a, b, c) {

	var max;

 	if (a >= b && a >= c) {
 		max = a;
 	}
 	else if (b >= a && b >= c) {
 		max = b;
 	}
 	else if (c >= a && c >= b) {
 		max = c;
 	}
 	return max;

}
 */ 

function maxOfThree(a, b, c) {

var realMax = max(a, b);
var realMax = max(realMax, c);

return realMax;

}


 


