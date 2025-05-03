/*Create a function that accepts an array of names, and returns an array of each name with its first 
letter capitalized and the remainder in lowercase.

Examples:
    ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
    ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']*/


//My Solution
function isIsogram(str){
    const letters = {};
    
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        
        if (letters[letter]) {
            return false;
        }
        
        letters[letter] = true;
    }
    return true;
}

//Best Practise
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}