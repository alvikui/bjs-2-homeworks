function compareArrays(arr1, arr2) {

	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

	let filterGender = users.filter(user => user.gender === gender).map(user => user.age);
	let result = filterGender.reduce((acc, arr) => acc + arr, 0) / filterGender.length;

	return result > 0 ? result : 0;
}