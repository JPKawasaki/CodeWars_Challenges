/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

//My Solution
function moveZeros(arr) {
    let newArr = [];
    let zeros = [];
    
    for (const char of arr) {
      if (char === 0) {
        zeros.push(char);
      } else {
        newArr.push(char);
      }
    }
    return newArr.concat(zeros)
}

//Best Practise
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
}