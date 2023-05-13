// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// STRINGSFUNDAMENTALS
// Suggest kata description edits

// Best practice
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  

// Second Attempt
function count(string) {
    let charCount = {};// initialize an empty object to store character counts
     for( let i = 0; i < string.length; i++){// loop through each character in the string
       let char = string.charAt(i); // get the current character
       charCount[char] = (charCount[char] || 0) + 1;// increment the character count in the object
     }
     return string.length === 0 ? {} : charCount ;  // if the string is empty, return an empty object, otherwise return the character count object

   }

// First attempt
function count(string) {
    let str = 0;
    for ( let i = 0; i < string.length; i++){
      str++;
    }
      return str
  }