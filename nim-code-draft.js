/* Nim Simple by Marshall */

/* Initialize global variables */

// declare variable games and set equal to 0
var games = 0;
// declare variable again and set equal to true
var again = true;
// declare variable count and set equal to 0
var count = 0;
// declare variable turns and set equal to 0
var turns = 0;
// declare variable next and set equal to 0
var next = 0;

/* Main */

// while again is equal to true 
while (again == true) {
	// variable count equal to 0 
	count = 0;
	// variable turns equal to 0
	turns = 0;
	
	// variable next to the remainder of games divided by 2 (modulus)
	
// if next is equal to 0, call cpuTurn
if (next == 0) {
	cpuTurn;
	count += turn;
}
// else if next is not equal to 0, call userTurn
else if (next != 0) {
	userTurn;
	count += turn;
}

// while count is greater than or equal to 21, 
while (count >= 21) {
	// call function declare winner
	declareWinner;
	// add 1 to games
	games++;
	// call playAgain
	playAgain;

// if count is not greater than or equal to 21, 
	// add 1 to turns
	// call nextSwitch
	// -- loop back into next = 0 --

/* Functions */

/* 
function userTurn() 
* prompts user for turn amount and validates user's input 
* Param none
* Return boolean
*/

function userTurn {
	turn = prompt("Your turn. Choose a number 1-3");
	if (turn > 0 && turn < 4) {
		return Number(turn);
	}
	else {
		alert("Amount out of range, try again.")
	}
}

/* 
function cpuTurn() 
* creates turn for cpu; generate random number between 1 and 3 (alert int to player)
* Param none
* Return boolean
*/

function cpuTurn() {
	turn = Math.floor(Math.random()*3)+1;
	alert("cpu counts " + turn + ".")
	return turn;
}

/* 
function playAgain() 
* prompts user on if they want to play again after finishing a game
* Param none
* Return boolean
*/

function playAgain() {
	again = prompt("Play again? y = yes");
	if (again == "y") {
		return true;
	}
	else {
		return false;
	}
}

/* 
function declareWinner(next) 
* Checks next value and with that information declares winner
* Param next
* Return none
*/

function declareWinner(next) {
	if (next == 0) {
		alert("You lose")
	}
	else {
		alert("You win!")
	}
}

/* 
function nextSwitch(next) 
* Checks next value and with that information determines who goes first in next game
* Param next
* Return int 
*/

nextSwitch(next) {
	if (next == 0) {
		return 1;
	}
	else {
		return 0;
	}
}
