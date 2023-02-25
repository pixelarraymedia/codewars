// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


const findAverage = array =>
array.length > 0 ? array.reduce((el, curr) => el + curr) / array.length : 0
