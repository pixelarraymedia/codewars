// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



const expandedForm = num => num.toString().split("").reverse('').map((a, i) => a * Math.pow(10 , i )).filter( a  => a > 0).reverse().join( ' + ' )

 function expandedForm(num) {
     return String(num)
             .split("")
             .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
             .join(" + ")
   }

// In step 4, the .map() method is called on the reversed array of digits obtained from n, and a callback function (a, i) => a * Math.pow(10, i) is provided as an argument. This callback function takes two parameters, a and i, representing the current element and its index in the array, respectively.

// The purpose of this callback function is to convert each digit in the reversed array into its respective multiple of a power of 10. Here's how it works:

// a: Represents the current digit in the array. For example, if n is 12345, and the array of digits obtained from n is [5, 4, 3, 2, 1], then a will take on the values 5, then 4, then 3, and so on, as the callback function is called for each element in the array.

// i: Represents the index of the current element in the array. For example, if n is 12345, and the array of digits obtained from n is [5, 4, 3, 2, 1], then i will take on the values 0 for 5, then 1 for 4, then 2 for 3, and so on, as the callback function is called for each element in the array.

// Inside the callback function, a is multiplied by Math.pow(10, i). Math.pow(10, i) calculates the value of 10 raised to the power of i, effectively representing the place value of the current digit in n based on its position in the reversed array.

// For example, let's say the current digit is 3 and its index is 2, which means it is in the third position from the right in the reversed array. The callback function will calculate Math.pow(10, 2), which is 100, and multiply it by 3, resulting in 300. This represents the expanded form of the digit 3 in the hundreds place (10^2) of n.

// The .map() method returns a new array containing the results of applying the callback function to each element in the original array. So, after step 4, we have an array of multiples of powers of 10 corresponding to each digit in n.