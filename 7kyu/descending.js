// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
// convert to string
  // sort -> reverse string numbers
  // add spaces iun string result
    
      var stringToNumber = n.toString();
      // Turn number to tring
    
      var arr = stringToNumber.split('');
    
      var result = arr.sort(function(a, b){return b - a});
    // only now that we have split the number we can sort()
      var stringresult = result.join();
    //   
      stringresult = stringresult.replace(/,/g,"");
    // replace string result , with a space
      return parseInt(stringresult)
    
    }