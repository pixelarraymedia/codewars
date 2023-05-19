// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// FUNDAMENTALS

function findOdd(ar) {
      // The function takes an array 'ar' as input and searches for an element that satisfies the provided testing function.
    return ar.find((item) => ar.filter(el => el === item ).length % 2)
      // The 'find()' method is used to search for an element that meets the condition specified by the arrow function.
      // This arrow function checks each element 'item' of the array.

   }


   //  ar.filter(el => el === item)
// // The 'filter()' method is used to create a new array that only contains elements matching 'item'.
// // It filters out all other elements except for the ones equal to 'item'.

// ar.filter(el => el === item).length
// // The 'length' property is used to determine the count of elements matching 'item' in the filtered array.

// ar.filter(el => el === item).length % 2
// The '%' operator is used to perform modulo division by 2.
// This checks if the length is an odd number (has a remainder of 1 when divided by 2).