/*You need to write regex that will validate a password to make sure it meets the following criteria:
  At least six characters long
  contains a lowercase letter
  contains an uppercase letter
  contains a digit
  only contains alphanumeric characters (note that '_' is not alphanumeric)*/


//My Solution
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

//Best Practise
//...