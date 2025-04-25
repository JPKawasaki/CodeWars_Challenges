/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */


//My Solution
function solution(str){
  let reverse = '';
  
  for (let i = str.length - 1; i >= 0; i--){
    reverse += str[i];
  }
  return reverse;
}

//Best Practise
function solution(str){
  return str.split('').reverse().join('');  
}