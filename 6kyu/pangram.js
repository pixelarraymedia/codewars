// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string){
    let str=string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
    return [...new Set(str)].length==26
  }

///// * brute force * ///// 


// string, a-z,
// ignore duplicate chars, no numbers, if pangram = true else false

// function isPangram(string) {
//   string = string.toLowerCase().replace(/[^a-z]/g, "");

//   // log letters in empty object
//   let letters = {};

//   // loop through letters in the sentance
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     //  add letters the object
//     if (!letters[char]) {
//       letters[char] = true;
//     }
//   }

//   // check if letters = 26
//   if (Object.keys(letters).length == 26) {
//     return true; // pangram
//   } else {
//     return false; // not
//   }
// }
  