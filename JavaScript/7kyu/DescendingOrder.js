/* Your job is to write a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:
    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.
    Your function takes a string argument and returns whether it is a valid password, as a boolean.

Examples:
    "Abcd1234" ===> true
    "Abcd123" ===> false
    "abcd1234" ===> false
    "AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
    "ABCD1234" ===> false
    "Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
    "!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false; */

//My Solution
function password(str) {
    const hasUpper = /[A-Z]/.test(str);
    const hasLower = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const longEnough = str.length >= 8
    
    if (hasUpper && hasLower && hasNumber && longEnough) {
      return true;
    }
    return false;
}

//Best Practice
function password(str) {
    return str.length >= 8 &&
        /[a-z]/.test(str) &&
        /[A-Z]/.test(str) &&
        /\d/.test(str);
}