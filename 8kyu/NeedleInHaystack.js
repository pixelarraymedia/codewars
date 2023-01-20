// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// String, Needle
// Message + index 

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  }