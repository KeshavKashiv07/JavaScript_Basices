function calculateAreaOfSquare(side) {
    return side * side;
}

function calculateAreaOfCircle(pi , radius) {
    return pi*(radius*radius);
}

function calculateAreaOfRectangle(length , breadth) {
    return length * breadth;
}

let areaOfHens = calculateAreaOfSquare(4);
console.log(`square area for the hens ${areaOfHens}`)

let areaOfducks = calculateAreaOfCircle(3.14 , 10);
console.log(`circular area for the ducks ${areaOfducks}`)

let areaOfcows = calculateAreaOfRectangle(20,10);
console.log(`rectangular area for the cows ${areaOfcows}`)

