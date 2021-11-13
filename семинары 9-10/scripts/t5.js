console.log("Task5\n\n");
function countBs(text){
	let cnt = 0;
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i) == 'B'){
			cnt++;
		}
	}
	return cnt;
}
function countChar(text, sym){
	let cnt = 0;
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i) == sym){
			cnt++;
		}
	}
	return cnt;
}

console.log(countBs("BfufIpbpBDBbPsjdubf"));
console.log(countChar("lorem ipsum ser amer", "e"));