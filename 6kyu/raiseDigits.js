
// Task
// We need a function to collect these numbers, that may receive two integers 
// a, 
// b that defines the range 
// [
// ,
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// ,
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!



// researched answer

function sumDigPow(a, b) {
    let eureka = []
    for( i = a; i <= b; i++){
      let digit = String(i).split('')
      if(i == digit.reduce(function(accumulator, currentValue, currentIndex){
        return accumulator + currentValue**(currentIndex + 1)
        
      }, 0 ))
       eureka.push(i)
      }
      return eureka
      }


      /// my attempt

      function sumDigPow(a, b) {
        let n = (a <= b)
        return n < 10 ? 
          n : sumDigPow((a,b + '').split('').reduce((acc,val) => acc + +val, 0))
      }
      


      /// Top Answer

      function sumDigPow(a, b) {
        var arr = [];
        for (var i = a; i <= b; i++) {
          var sum = 0;
          for (var j = 0; j <= String(i).length; j++) {
            sum += Math.pow(parseInt(String(i)[j]), j+1);  
            if (sum == i) arr.push(i);
          }
        }
        return arr;
      }