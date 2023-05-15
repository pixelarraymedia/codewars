// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

function solution(string) {
  let splitStr = string.split(""); // convert the input string to an array of characters
  let newStr = ""; // initialize an empty string to store the modified string
  
  splitStr.forEach(index => { // loop through each character in the array using the forEach() method
    if (index === index.toUpperCase()) // if the character is uppercase
      newStr += " " + index; // add a space followed by the character to the new string
    else
      newStr += e; // otherwise, add the character to the new string without any modification
  });
  
  return newStr; // return the modified string
}
// In this implementation, we convert the input string to an array of characters using the split() method. We then initialize an empty string newStr to store the modified string.

// We loop through each character in the array using the forEach() method. For each character



                
  // My solution :
//   function solution(string) {
//   let newStr = "";
//   if(string){
//   let wordArr = string.split(/(?=[A-Z])/g);
//     for(let i in wordArr) {
//       if(i > 0 ) {
//         newStr += wordArr[i].charAt(0).replace(" ") + wordArr[i].slice(1)
        
          
//         }else {
//           newStr += wordArr[i]
//         }
//       }
    
//     }   else {
//       return newStr
//     }
//   return newStr;
  
//   }                
    

