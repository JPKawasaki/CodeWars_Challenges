/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.
Examples:
    Input -> Output
    [1, 1, 2] -> [1, 2]
    [1, 2, 1, 1, 3, 2] -> [1, 2, 3] */

//My Solution
function distinct(a) {
    let withoutDuplicates = [];
    
    for (let i = 0; i < a.length; i++) {
      if (!withoutDuplicates.includes(a[i])) {
        withoutDuplicates.push(a[i]);
      }
    }
    return withoutDuplicates;
}

//Best Practice
function distinct(a) {
    return [...new Set(a)];
}