/*Create a function that accepts an array of names, and returns an array of each name with its first 
letter capitalized and the remainder in lowercase.

Examples:
    ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
    ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']*/


//My Solution
function capMe(names) {
    let newArr = [];
    
    for (let i = 0; i < names.length; i++) {
        const word = names[i];
        let newWord = "";
        
        if (word.length > 0) {
            newWord += word[0].toUpperCase();
            for (let j = 1; j < word.length; j++) {
            newWord += word[j].toLowerCase();
            }
        }
        newArr.push(newWord);
    }
    return newArr;
}

//Best Practise
function capMe(names) {
    return names.map(function (n) { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); });
}