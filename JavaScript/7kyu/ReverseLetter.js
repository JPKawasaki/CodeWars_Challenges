/* Given a string str, reverse it and omit all non-alphabetic characters.
Example:
  For str = "krishan", the output should be "nahsirk".
  For str = "ultr53o?n", the output should be "nortlu". */

//My Solution
function reverseLetter(str) {
  let newStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] )
    newStr += str[i];
  }
  
  return newStr.replace(/[^a-zA-Z]/g, '');
}

//Best Practice
function reverseLetter(str) {
  return str.split('')
            .reverse()
            .filter(val => /[a-zA-Z]/.test(val))
            .join('');  
}