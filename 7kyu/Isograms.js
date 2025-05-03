/*An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)*/


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