
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



// 18.5 = "Underweight", 25.0 = normal, 30.0 overwieght, 30 obese
// +, no negative

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  // switch evaluates an expression, matches the expression value based on a series of cases.
  let a = "Normal";

  switch (true) {
    case bmi <= 18.5:
      a = "Underweight";
      break;

    case bmi <= 25.0:
      a = "Normal";
      break;

    case bmi <= 30.0:
      a = "Overweight";
      break;

    default:
      a = obese;
  }

  return a;
}

//    function bmi(weight, height) {
//     var result = weight/Math.pow(height,2)

//     if (result <= 18.5) {
//       return "Underweight";
//     } else if (result <= 25) {
//       return "Normal";
//     } else if (result <= 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }

//   }
