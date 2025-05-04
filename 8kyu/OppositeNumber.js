/*Very simple, given a number (integer / decimal / both depending on the language),
find its opposite (additive inverse).

Examples:
    1: -1
    14: -14
    -34: 34*/


//My Solution
function opposite(number) {
	return number - (number * 2);
}

//Best Practise
function opposite(number) {
    return(-number);
}