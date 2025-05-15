/* You get an array of numbers, return the sum of all of the positives ones.

Example:
    [1, -4, 7, 12] => 1 + 7 + 12 = 20
Note:
    If there is nothing to sum, the sum is default to 0. */


//My Solution
function positiveSum(arr) {
  let res = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res += arr[i];
    }
  }
  return res;
}

//Best Practise
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}