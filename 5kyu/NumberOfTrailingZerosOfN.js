/* Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 *  ... * N
Be careful 1000! has 2568 digits...
Examples:
  N	Product	N factorial	Trailing zeros
  6	1*2*3*4*5*6	720	1
  12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2 */

//My Solution
function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

//Best Practice
function zeros(n) {
  return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
}