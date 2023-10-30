//brute force

function zero(calc) { return calc ? calc(0) : 0;}
function one(calc) { return calc ? calc(1) : 1;}
function two(calc) { return calc ? calc (2) : 2;}
function three(calc) { return calc ? calc(3) : 3;}
function four(calc) { return calc ? calc(4) : 4;}
function five(calc) { return calc ? calc(5) : 5;}
function six(calc) { return calc ? calc(6) : 6;}
function seven(calc) { return calc ? calc(7) : 7;}
function eight(calc) { return calc ? calc(8) : 8;}
function nine(calc) { return calc ? calc(9) : 9;}

function plus(l) { return (r)=>r+l}
function minus(l) { return (r)=>r-l}
function times(l) { return (r)=>r*l}
function dividedBy(l) { return (r)=>Math.floor(r/l)}

// best practice // doesnt work
let n = function(num){
    return function(pos){
      return pos ? pos(num) : num;
    }
  };
  
  let zero = n(0);
  let one = n(1);
  let two = n(2);
  let three = n(3);
  let four = n(4);
  let five = n(5);
  let six = n(6);
  let seven = n(7);
  let eight = n(8);
  let nine = n(9)
  
  function plus(right) {return function(left) {return left + right;}; }
  function minus(right) {return function(left) {return left - right;}; }
  function times(right) {return function(left) {return left * right;}; }
  function dividedBy(right) {return function(left) {return Math.floor(left / right);}; }