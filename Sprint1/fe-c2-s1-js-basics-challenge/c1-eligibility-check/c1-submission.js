/*
    Challenge 1 - Check Eligibility
*/

// Declare variables to store age, gender, isUSCitizen (true/false) and statePageant values
let age=28;
let gender="female";
let isUSCitizen=true;
let statePageant="new york"


// Write logic using if..else statements to check and display the eligibility status
if(age>=18 && age<=28 && gender =="female" && isUSCitizen==true){
    console.log("Eligible");
} 
else{
    console.log("Not Eligible");
}