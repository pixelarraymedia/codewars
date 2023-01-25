// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line


// Number, + , -
// 0, console


const sum = numbers => { 
    // Loop check for empty value
  let result = 0;
    for (let i = 0; i < numbers.length; i += 1)
      // add items in array to the sum variable
      {
        result += numbers[i];
        // 0
        // 0 + 1 => #result = 1
       // 1 + 6 => #result = 6 
      }
    console.log(numbers)
    
    return result;
  };


  // function sum(numbers) {
  //   return numbers.reduce((a, b) => a + b, 0);
  // } //.reduce() returns the sum of all elements in the array
  
  