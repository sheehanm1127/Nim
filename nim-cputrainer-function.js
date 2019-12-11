/* 
function cpuTrainer(count) 
* creates turn for cpu; When the cpu is presented with a count that is a multiple of 4, generate random number 1-3 for turn. When count is not a multiple of 4, cpu calculates turn.
* Param count
* Return variable
*/

function cpuTrainer(count) {
	if (count%4 != 0) {
		turn = 4 - (count%4);
	}
	else if (count == 20) {
		turn = 1;
	}
	else {
		turn = Math.floor(Math.random()*3)+1;
	}
	alert("CPU counts " + turn);
	count+=turn;
	alert("Count is now " + count);
	return count;
}
