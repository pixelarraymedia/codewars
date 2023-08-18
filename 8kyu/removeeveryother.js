// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// array of words, never empty, no numbers, words 
// array, return even elements
function removeEveryOther(arr){
    // create result empty array
    // Loop through strings remove each odd string by storing in an object
    // return the result
    
    let result = [];
    
    for(let i = 0; i < arr.length; i += 2){
     result.push(arr[i]);
    }
    return result
      
  }


  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }