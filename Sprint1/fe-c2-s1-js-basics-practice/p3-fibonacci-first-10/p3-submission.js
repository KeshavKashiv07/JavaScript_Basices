/*
    Practice 3 - Fibonacci Series for First 10 numbers
*/ 

// Declare and initialize variable to store count value.
let count=0;

// Declare and initialize variables to store the first two values of the fibonacci series.
let n1=0;
let n2=1;

// Display the first two values of the fibonacci series.
 console.log("output :")
console.log(n1);
console.log(n2);


// Write `for` loop to generate rest of the values in the fibonacci series.
for(let i=1; i<=8; i++){
    count=n1+n2;
    console.log(count);
    n1=n2;
    n2=count;
}
