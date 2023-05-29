/*
    Challenge 3 - Know Your Lucky Number
*/ 

// Declare and initialize variable to store date in `mmddyyyy` format
let date= "05312022";

// Declare variable to store single digit sum value
let double_sum=0;
let single_sum=0;

// Write nested loop to calculate single digit sum of the date stored in `mmddyyyy` format
while(date > 0){
    let rem= date % 10;
    double_sum = double_sum + rem;
     date=parseInt(date/10); 
 }
 console.log("sum = " + double_sum);

 while(double_sum > 0){
   let rem2= double_sum % 10;
   single_sum = single_sum + rem2;
   double_sum=parseInt(double_sum/10);
 }

// Display the single digit sum, which is the lucky number based on the date stored
console.log(`the lucky number is = **${single_sum}**`);
