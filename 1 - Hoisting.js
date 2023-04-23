/*
> Hoisting : During the creation phase in Execution Context, code is scanned for variable and function declarations and a new property is added to the 
           variable environment object. This property contains the variables and function and assigns them with a value(variable value will be set to 
           'undefined' & for function, the value is actul function body itself).          
           
> Var variables and function declarations are hoisted.

> Let and const are not hoisted( technically they are hoisted but their value is uninitialized and hence dumped into TDZ(Temporal Dead Zone)).
> Function expressions and Arrow functions also depends if declared with var,let or const.

> TDZ : Region of scope in which variable is defined but can't be used.

*/

console.log(hoistedVariable)//undefined
hoistedFunction();//I'm Hoisted!
console.log(notHoisted1)//ERROR!
console.log(notHoisted2)//ERROR!


var hoistedVariable = 5;
function hoistedFunction(){ console.log("I'm Hoisted!");}

let notHoisted1 = 1; // Line 1-23 is TDZ for this variable that's not accessible.
const notHoisted2 = 1; // Line 1-24 is TDZ for this variable that's not accessible.
