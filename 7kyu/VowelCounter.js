//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// String, lower case, no space,
// number, vowels, console

function getCount(str) {

    //Use Regex to count vowels
    return(str.match(/[^aeiou]/gi,'' )).length;


  }


  function getCount(str) {
    //Use loop to count vowels
    let vowelsCounter = 0;
    //Initializing count
    const vowels = [ 'a', 'e', 'i', 'o', 'u']

    // for...of  statement allows you to create a loop using values from an object
    for (let char of str) {
        if (vowels.includes(char)){
            vowelsCounter++
            // increment counter if value is counted
        }


    }
    return vowelsCounter
    
  }