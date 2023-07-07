// Ref: https://namnguyendev.hashnode.dev/codewars-6-kyu-consecutive-strings-javascript
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// array of strings, integer (k)
// strings, null

function longestConsec(starr, k){
// loop through array of strings
// join K elements together
// multiples of the same character select the element that is indexed first

let long = ""
// loop through array
for ( let i = 0; i <= starr.length - k ; i++){
    // 
    let str = starr.slice(i, i+k).join("")
    // checking for  strings with the greatest length

    if(tempStr.length > long.length){
        // if multiple strings have the same max length, return the first index
        long = tempStr
    }
}
// if n = 0 or k > n or k <= 0 return "" 
return k > 0 ? long : ""

}

// best practice
// function longestConsec(strarr, k) {
//     var longest = "";
//     for(var i=0;k>0 && i<=strarr.length-k;i++){
//         var tempArray = strarr.slice(i,i+k);
//         var tempStr = tempArray.join("");
//         if(tempStr.length > longest.length){
//             longest = tempStr;
//         }
//     }
//     return longest;
// }