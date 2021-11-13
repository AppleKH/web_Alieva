console.log("Task7\n\n");
function reverseArray(list){
	reversed = [];
	for (var i = 0; i < list.length; i++) {
		reversed.push(list[list.length-i-1]);
	}
	return reversed;
}

function reverseArrayInPace(list){
	reversed = reverseArray(list);
	for (var i = 0; i < list.length; i++) {
		list[i] = reversed[i];
	}
}


console.log(reverseArray([1, 3, 5, 7, 9]));
exampleList = [1, 3, 5, 7, 9];
reverseArrayInPace(exampleList);
console.log(exampleList);
