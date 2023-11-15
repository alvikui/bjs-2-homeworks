"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = (b ** 2) - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		arr[0] = -b / (2 * a);
		return arr;
	} else {
		arr[0] = ((-b + Math.sqrt(discriminant)) / (2 * a));
		arr[1] = ((-b - Math.sqrt(discriminant)) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = percent / 100 / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;

    totalPayment = Number(totalPayment.toFixed(2));

    return totalPayment;
}