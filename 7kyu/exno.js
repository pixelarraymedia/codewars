// " == " looks for equal value basically
// " === " looks for equal type

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = 0
    let o = 0
    
    for ( let i = 0; i < str.length; i++){
      let letter = str[i];
      if(letter === 'x' || letter === 'X'){
        x++;
      }else if(letter === 'o' || letter === 'O'){
          o++
        }
      }
   return x === o; 
   }