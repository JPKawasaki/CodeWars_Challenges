/* The first century spans from the year 1 up to and including the year 100, the second century -
from the year 101 up to and including the year 200, etc.

Examples:
    1705 --> 18
    1900 --> 19
    1601 --> 17
    2000 --> 20
    2742 --> 28
*/

//My Solution
function century(year) {
  return (year % 100 === 0) ? year/100 : Math.floor(year/100) + 1;
}

//Best Practise
function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}