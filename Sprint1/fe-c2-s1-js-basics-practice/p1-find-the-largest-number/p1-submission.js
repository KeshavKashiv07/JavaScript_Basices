/*
    Practice 1 - Find the Largest Number​
*/

// Declare and initialize variables
let num1=100;
let num2=500;
let num3=80;

let largest_num;


// Write logic to find the largest number using nested-if
if(num1 > num2) {
    if(num1 > num3) {
        largest_num=num1;
    }
    else{
        largest_num=num3;
    }
}
else{
    if(num2 > num3){
        largest_num=num2;
    }
    else{
        largest_num=num3;
    }
}

// Display the largest number
console.log(`Grater number is ${largest_num} by nested-if`);

// Write logic to find the largest number using ternary operator
largest_num = num3 > (num1>num2?num1:num2) ? num3 : (num1>num2?num1:num2);

// Display the largest number
console.log(`Grater number is ${largest_num} by ternary operator`);