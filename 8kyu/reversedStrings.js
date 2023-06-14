// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution
function solution(str){

    let newString = str.split("");
  
    let reverseStr = newString.reverse()
    
    let result =  reverseStr.join("");
    
    return result
  }

// Best practices  
// function solution(str){
//     return str.split('').reverse().join('');  
//   }