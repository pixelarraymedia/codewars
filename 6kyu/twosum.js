// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or



function twoSum(numbers, target) {
    for( let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
          return [ i , j ];
        }
      }
    }
    }


// Reduced time complexity from O(n^2)to 0(n)

var twoSum = function(nums, target){
    // Initialize an empty object to keep track of previously encountered numbers
    previousNums = {}

    // Loop through each element and its index in the nums array using the entries() method and the for...of loop
    for (const [index, num] of nums.entries())
    {
      // Calculate the complement of the current num value
      answer = target - num
  
      // Check if the complement has already been encountered
      if(previousNums[answer] !== undefined){
        // If the complement has been encountered, return an array with the indices of the current num value and its complement
        return [previousNums[answer], index]
      }
  
      // If the complement has not been encountered, store the current num value and its index in the previousNums object for future reference
      previousNums[num] = index
    }
  
    // If no pair of numbers that add up to the target value are found, return undefined
    return undefined
  };