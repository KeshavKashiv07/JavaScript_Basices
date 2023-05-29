/*
    Practice 2 - Count Days for a Given Month and Year​
*/

// Declare and initialize variables to store month and year values
let month=2;
let year=2016;
let day;


// Write the logic used to check the number of days in the month using switch case
switch(month) {
    case 1 :
        case 3 : 
            case 5 :
               case 7 :
                  case 8 :
                     case 10 :
                        case 12 :{
                                   day=31;
                                     break;
                                 }

    case 2 : {
                   if(year%4==0){
                      day=28;
                    }
                   else{
                    day=29;
                    }
                    break;
            }
   
    case 4 :
        case 6 :
            case 9 :
                case 11 : {
                            day=30;
                              break;
                         }
    default : {
        console.log("Invalid month");
        break;
    }
    
}


// Display the value of day count
console.log(`Number of days is ${day}`)