/* Write a program that, given a word, computes the scrabble score for that word.
You'll need these:
  Letter                           Value
  A, E, I, O, U, L, N, R, S, T       1
  D, G                               2
  B, C, M, P                         3
  F, H, V, W, Y                      4
  K                                  5
  J, X                               8
  Q, Z                               10
  There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples:
  "cabbage" --> 14
  "cabbage" should be scored as worth 14 points:
    3 points for C
    1 point for A, twice
    3 points for B, twice
    2 points for G
    1 point for E
  And to total:
    3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case),
you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14 */

//My Solution
function scrabbleScore(str){
  let sum = 0;
 
  for (const char of str.toUpperCase()) {
    if ($dict[char]) {
      sum += $dict[char];
    }
  }
  
  return sum
}

//Best Practice
function scrabbleScore(str){
  return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v]||0)},0)
}

function scrabbleScore(str){
  var output = 0;
  for (var i in str) {
    output += $dict[str[i].toUpperCase()] || 0;
  }
  return output;
}