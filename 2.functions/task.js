function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		min = Math.min(min, arr[i]);
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;

	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;

	for (i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		min = Math.min(min, arr[i]);
	}
	if (arr.length === 0) {
		return 0;
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0; // четные
	let sumOddElement = 0; // нечетные

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];
			countEvenElement++;
		}

	}
	let avg = sumEvenElement / countEvenElement;
	return avg;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
