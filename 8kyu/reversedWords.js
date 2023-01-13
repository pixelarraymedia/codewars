// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// String,
// Array, Revesered, retained spacing
// Console

function reverseWords(str) { 
  
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
  
    // Create array of characters using .split()
    // Flip using .reverse() on returned array
    // Using .join() we can put the array back together
    // Split string back into array using .split(' ') to split at spaces
    // Use reverse to 
  }
  
  
  