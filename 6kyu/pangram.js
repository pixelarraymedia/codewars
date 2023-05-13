// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    let str = string.split('') // convert the input string to an array of characters
                   .join('') // join the characters into a single string
                   .replace('/[W\d/g]', '') // remove any non-alphabetic characters using a regular expression
                   .toLowerCase() // convert all characters to lowercase
                   .split(''); // convert the string back into an array of characters
    
    return [...new Set(str)].length == 26; // convert the array to a set to remove duplicates, then check if the length is 26 (the number of letters in the alphabet)
  }