// copy the solution code from `Practice 1 - Calculate Area` 
// from the sprint `Implement Modular Programming using Functions`

function calculateAreaOfSquare(side) {
   if(side == undefined){
      return "Insufficient Input";
   }
   else if(typeof (side) != "number"){
      return "Invalid Input Type, Side Should Be A Number !!";
   }
   else if(side <= 0){
      return "Incorrect Input, Side Cannot Be Zero or Negative !!";
   }
   return side * side;
}

function calculateAreaOfCircle(radius) {
   if(radius == undefined){
      return "Insufficient Input";
   }
   else if(typeof (radius) != "number"){
      return "Invalid Input Type, radius Should Be A Number !!";
   }
   else if(radius <= 0){
      return "Incorrect Input, radius Cannot Be Zero or Negative !!";
   }
   return 3.14*(radius*radius);
}

function calculateAreaOfRectangle(length , breadth) {
   if(length == undefined || breadth ==undefined){
      return "Insufficient Input";
   }
   else if(typeof (length) != "number" || typeof (breadth) != "number"){
      return "Invalid Input Type, Length and Breadth Should Be Numbers !!";
   }
   else if(length <= 0 || breadth <= 0){
      return "Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!";
   }
   return length * breadth;
}

let areaOfhens = calculateAreaOfSquare(4);
console.log(`square area for the hens ${areaOfhens}`)

let areaOfducks = calculateAreaOfCircle(10);
console.log(`circular area for the ducks ${areaOfducks}`)

let areaOfcows = calculateAreaOfRectangle(20,10);
console.log(`rectangular area for the cows ${areaOfcows}`)


// do not delete the below code, it is written to export the functions to be tested
module.exports = {
   calculateAreaOfCircle,
   calculateAreaOfRectangle,
   calculateAreaOfSquare
}