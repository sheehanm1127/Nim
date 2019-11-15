/* Nim Simple- with Pseudocode */

/* Initialize Globals */


// declare variable again, equal to true
var again = true;
// declare variable games, equal to 0
var games = 0;
// declare variable count, equal to 0
var count = 0;
// declare variable next, equal to 0
var next = 0;

/* Main */

// alert the player that they are playing Nim 
alert("Let\'s play Nim!");
// while loop for while again is equal to true
while (again == true) {
	// variable count, equal to 0
	count=0;
	// variable turn, equal to 0
	turn=0;
	// variable next, equal to the remainder of games divided by 2
	next=games%2;
	// while loop for while count if less than 21
	while (count < 21){
		// if next is equal to 0, count equals function cpuTurn(count)
		if (next == 0) count = cpuTurn(count);
		// else count equals function userTurn(count)
		else count = userTurn(count);
		// if count is less than 21, next is equal to function nextSwitch(next)
		if (count < 21) next=nextSwitch(next);
	// close while loop
	}
	// again is equal to function declareWinner(next)
	again = declareWinner(next);
// close while loop
}
// alert goodbye message
alert("Nice playing with you!");

/* Functions */

// begin function cpuTurn(count )
function cpuTurn(count){
	// declare variable goodTurn, equal to false
	var goodTurn = false;
	// declare variable turn, equal to 0
	var turn=0;
	// begin while loop for while goodTurn is equal to false
	while (goodTurn == false) {
		// variable turn, equal to randomly generated number between 1 and 3
		turn = Math.floor(Math.random()*3)+1;
		// if turn is equal to 1 or turn is less than 1 and count plus turn is less than 21, goodTurn is equal to true
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	// close while loop
	}
	// alert to the user what the computer counted 
	alert("CPU counts "+turn);
	// add turn to count 
	count += turn;
	// alert the user of the new count
	alert("Count is now "+count);
	// return count
	return count;
// close function 
}

// begin function userTurn(count)
function userTurn(count) {
	// declare variable goodTurn, equal to false
	var goodTurn = false;
	// declare variable turn, equal to 0
	var turn=0;
	// begin while loop for while goodTurn is equal to false
	while (goodTurn == false) {
		// variable turn is equal to prompt the user for their turn, a number 1-3
		turn = prompt("Enter 1, 2 or 3");
		// if turn is greater than 0 and turn is less than 4 and math.floor(turn) is equal to turn, goodTurn is equal to true
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) goodTurn=true;
		// else alert the user that their input was invalid
		else alert("Invalid input. Enter 1,2 or 3.");
	// close while loop
	}
	// add turn to count (clarify that turn is a number)
	count += Number(turn);
	// alert the user of the new count
	alert("Count is now "+count);
	// return count
	return count;
// close function
}

// begin function nextSwitch(next)
function nextSwitch(next){
	// if next is equal to 0, next is equal to 1
	if (next==0) next = 1;
	// else, next is equal to 0
	else next = 0;
	// return next
	return next;
// close function 
}

// begin function declareWinner(next)
function declareWinner(next){
	// if next is equal to 0, winner is equal to "you"
	if (next==0) winner = "You";
	// else, winner is equal to "I"
	else winner = "I";
	// alert the user of who won
	alert(winner + " won!");
	// add 1 to games
	games++;
	// again is equal to confirm prompt, telling the player they can play again by clicking okay and quit by clicking cancel
	again = confirm("Press OK to play, Cancel to quit.");
	// return again
	return again;
// close function
}
