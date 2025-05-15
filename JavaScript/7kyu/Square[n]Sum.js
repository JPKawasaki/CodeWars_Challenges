/*Complete the square sum function so that it squares each number passed into it and 
then sums the results together.

For example:
    for [1, 2, 2] it should return 9 because 
    1*1 + 2*2 + 2*2 = 9*/


//My Solution
function squareSum(numbers){
    let squares = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        squares += numbers[i] * numbers[i];
        }
    return squares;
}

//Best Practise
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}