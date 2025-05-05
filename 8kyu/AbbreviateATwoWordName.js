/*Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
    Sam Harris => S.H
    patrick feeney => P.F*/


//My Solution
function abbrevName(name){
    const nameNew = name.split(" ");
    let initials = [];
  
    for (let i = 0; i < nameNew.length; i++) {
        initials.push(nameNew[i][0].toUpperCase());
    }
    
    return initials.join(".");
}

//Best Practise
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}