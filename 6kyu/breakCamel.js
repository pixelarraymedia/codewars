// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

function solution(string) {
    let splitStr = string.split("");
    let newStr = "";
  splitStr.forEach(e =>{ 
    if( e === e.toUpperCase()) newStr +=" "+e;
    else newStr += e;
    
  });
  
  return newStr;
  
  }                 
    
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
    

