// 1 to num, 3 fizz, 5 buzz, 3&5 fizzbuzz
// Whole, + , 
// No array return to console


function fizzbuzz(number){ 

        // Loop from 1 - 10
        // Conditionals :  % , 3 %, 5 %, 15 %
        for( let i = 1; i <= number; i++  ) {
        if (( i % 3 == 0  && i % 5 == 0)) 
            console.log('FizzBuzz')
        else if ( i % 3 == 0 ) 
            console.log('fizz')
        else if ( i % 5 == 0 ) 
            console.log('buzz')
        else 
            console.log('i')
    
        }

}


fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzbuzz(3) // 1, 2, fizz 
fizzbuzz(15) // 1, 2, fizz, 4, buzz, fizz, 7 , 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz,