// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.




// Compile grade thresholds in an object
// Use math.floor we return the number greated than or equal to the grade

function getGrade (s1, s2, s3) {
    return {10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D'}[Math.floor((s1 + s2 + s3) / 30)] || "F" 
  }