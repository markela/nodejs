
var rect = require('./rectangle.js');

function solveRect(l, b) {
	console.log("Solving for rectangle with l = " + l + " and b = " + b);
	
	if (l < 0 || b < 0) {
		console.log("Rectangle dimensions should be positive!");
	}
	else {
		console.log("Area = " + rect.area(l, b) + 
					" Perimeter = " + rect.perimeter(l, b));
	}
}

solveRect(3, 4);
solveRect(1, 1);
solveRect(-1, 2);