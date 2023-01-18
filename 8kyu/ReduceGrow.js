// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Multiply all values together in order and return the result
// Using .reduce() we can pass the return value from each element in the array in order

const grow=x=> x.reduce((a,b) => a*b);

// const grow = x => {
//     let result = 1;
//     for ( let i = 0; i < x.length; i++ )
//     {
//      result *= x[1];
//     }
//     return result;
// };