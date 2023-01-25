// Array, true , false, true = shee
// Numeric value, String, null, undefined
// sample test

//const array2 = [ true, false, true, false ]

const countSheeps = arrayOfSheep => {

      // loop
        // Conditionals, + , true++
        // console.log number
    let count = 0

    for(let i = 0; i < arrayOfSheep.length; i += 1){

      count += arrayOfSheep[i];
    }
    //console.log(count)

    return count;
};


// Use reduce to sum true values
function counter(arrayOfSheep){
    return arrayOfSheep.reduce((acc,cur) => acc + cur, 0)
}


// const countSheeps = arrayOfSheep => {

//     let count = 0

//     for(let i = 0; i < arrayOfSheep.length; i++){

//       count += arrayOfSheep[i];
//     }

//     return count;
// };

