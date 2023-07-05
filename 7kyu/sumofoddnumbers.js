// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


// The Math.pow() static method returns the value of a base raised to a power. That is
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠
// (
// 𝚡
// ,
// 𝚢
// )
// =
// �
// �

function rowSumOddNumbers(n) {
    return Math.pow( n, 3 )
   }