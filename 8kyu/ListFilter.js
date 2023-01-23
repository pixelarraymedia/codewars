// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//// Num, +, Strings , 0 
//// No strings,
//// typeof, .push()

// function filter_list(l) {
//    let int = []
//    for ( let i = 0; i < l.length; i++){
//      if( typeof l[i] == 'number'){
//        int.push(l[i])
//     }
//   }
//     return int
// }

function filter_list(l) {
    // filter  array
    // Check type of for number
    // return result
    return l.filter(number => typeof number === 'number');
    
  }
  
  