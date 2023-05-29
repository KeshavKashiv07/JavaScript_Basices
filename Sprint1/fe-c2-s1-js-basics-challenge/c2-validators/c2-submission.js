/*
    Challenge 2 - Validate Values
*/

let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(typeof(firstName) == "undefined"){
    console.log("First Name value must not be undefined");
}

if(typeof(firstName) == "string"){
    console.log("First Name value must be of type String");
}


// Provide solution code here for Validating LastName
if(typeof(lastName) == "string"){
    console.log("Last Name value must be of type String value");
}


// Provide solution code here for Validating Age
if(typeof(age) == "undefined"){
    console.log("Age value must not be undefined");
}

if(typeof(age) == "number"){
    console.log("Age value must be of type Number ");
}

if(age>=18 && age<=60){
    console.log("Age should be between 18 and 60");
}


// Provide solution code here for Validating isMarried
if(typeof(isMarried) == "boolean"){
    console.log("IsMarried value must be of type Boolean");
}

// Provide solution code here for Validating City
if(typeof(city) == "string"){
    console.log("City value must be of type String");
}

// Provide solution code here for Validating State
if(typeof(state) == "string"){
    console.log("State value must be of type String");
}
 
// Provide solution code here for Validating Postal Code
if(typeof(postalCode) == "undefined"){
    console.log("Postal Code value must not be undefined");
}

if(typeof(postalCode) == "string"){
    console.log("Postal Code value must be of type String");
}
