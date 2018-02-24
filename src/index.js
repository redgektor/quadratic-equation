module.exports = function solveEquation(equation) {
	equation = equation.replace(/\s/g, '');
	var a = +equation.substr(0,equation.indexOf('*'));
	equation = equation.slice(equation.indexOf('*')+4);
	var b = +equation.substr(0,equation.indexOf('*'));
	equation = equation.slice(equation.indexOf('*')+2);
	var c = +equation;
	var d = Math.pow(b,2) - 4*a*c;
	if (d > 0) {
		var x1 = Math.round((-b + Math.sqrt(d))/(2*a),1);
		var x2 = Math.round((-b - Math.sqrt(d))/(2*a),1);
		if (x1 > x2 ) {
			return ([x2,x1]);
		} else {
			return([x1,x2]);
		}
	}
}
