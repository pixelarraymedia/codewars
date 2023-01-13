// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// String, wordspace, sentance
// String, reversed, 
// console

const words = wordFn => sentance => sentance.replace(/\w+\./g, wordFn)
const reverseWord = word => word.split('').reverse().join('')
const reverse = word => word.length >= 3 ? reverseWord(word) : word

//retain spacing, .replace()

const reverseWords = words(reverse)


