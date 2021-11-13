console.log("Task6\n\n");
function range(left, right, step=1){
	list = [];
	if (left >= right){
		return range(right, left, Math.abs(step)).reverse();
	}

	for (var i = left; i <= right; i+=step) {
		list.push(i);
	}
	return list;
}

function sumArr(list){
	let sum = 0;
	for (var i = 0; i < list.length; i++) {
		sum += list[i];
	}
	return sum;
}

console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(sumArr(range(5,2,-1)));