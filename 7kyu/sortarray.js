// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

const sortByLength = array => array.sort((a,b) => a.length - b.length)

// if the result is negative A is set to A lower index than B. meaning A will be indexed in a position before B
// if the result is positive A is sorted to an higher index then B. Meaning A will be indexed in a position after B. 
// if the A - B  result 0 they will remain in their current order

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

  let sortByLength = arr => arr.sort((a,b) => a.length - b.length);