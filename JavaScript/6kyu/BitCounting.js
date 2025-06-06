/*Write a function that takes an integer as input, and returns the number of bits that are equal to
one in the binary representation of that number. You can guarantee that input is non-negative.

Example: 
  The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/


//My Solution
var countBits = function(n) {
  //return n.toString(2).split("").filter(bit => bit === "1").length;
  
  const str = n.toString(2);
  const arr = str.split("");
  let res = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      res++;
    }
  }
  
  return res;
};

//Best Practise
var countBits = function(n) {
  return n.toString(2).split("").filter(bit => bit === "1").length;
}