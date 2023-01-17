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
  
  