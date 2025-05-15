/* You get an array of numbers, return the sum of all of the positives ones.

Example:
    [1, -4, 7, 12] => 1 + 7 + 12 = 20
Note:
    If there is nothing to sum, the sum is default to 0. */

//My Solution
function positiveSum(arr) {
    let res = 0;
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] > 0 ) {
            res += arr[i];
        } 
    }
    return res;
};

//Best Practice
function positiveSum(arr) {
    return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}