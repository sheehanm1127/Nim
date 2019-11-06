/* Nim Simple by Marshall */

/* Initialize global variables */

// declare variable games and set equal to 0
// declare variable again and set equal to true
// declare variable count and set equal to 0
// declare variable turns and set equal to 0
// declare variable next and set equal to 0

/* Main */

// while again is equal to true 
	// variable count equal to 0 
	// variable turns equal to 0
	
	// variable next to the remainder of games divided by 2 (modulus)
// if next is equal to 0, call cpuTurn
// else if next is not equal to 0, call userTurn

// after a cpuTurn or userTurn, add turn int to variable count

// while count is greater than or equal to 21, 
	// call function declare winner
	// add 1 to games
	// call playAgain

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

/* 
function cpuTurn() 
* creates turn for cpu; generate random number between 1 and 3 (alert int to player)
* Param none
* Return boolean
*/

/* 
function playAgain() 
* prompts user on if they want to play again after finishing a game
* Param none
* Return boolean
*/

/* 
function declareWinner(next) 
* Checks next value and with that information declares winner
* Param next
* Return none
*/

/* 
function nextSwitch(next) 
* Checks next value and with that information determines who goes first in next game
* Param next
* Return int 
*/
