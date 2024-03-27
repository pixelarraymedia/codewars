// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
// my solution
const rentalCarCost = (d) => {
  
    let result = 0
    if(d >= 7){
      result = d * 40 - 50
    }
    else if(d >= 3){
      result = d * 40 - 20
    }
    else{
      result = d * 40
    }
    return result
  }
/// best practice

  const baseCost = (days, rate) => {
    return days * rate;
  }
  const discount = (days) => {
    if(days >= 7) {
        return 50;
    } else if( days >= 3) {
        return 20;
    }
    else {
        return 0
    }

   const rentalCarCost = (days) => {
    return baseCost(days, 40) - discount(days);
   } 

  }
// clever
  const rentalCarCost = (d) => d * 40 - ((d >6) ? 50 : (d > 2) ? 20 : 0)