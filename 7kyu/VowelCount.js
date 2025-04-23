/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//Solutution 1
function getCount(str) {
    let vowel = 0;
    
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowel++;
                break;
        }
    }
    return vowel;
}

//Solution 2
function getCount(str) {
    return [...str].filter(x => "aeiou".includes(x)).length;
}