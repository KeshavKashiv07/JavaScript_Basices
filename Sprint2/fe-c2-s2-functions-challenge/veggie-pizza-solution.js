
// coustomer details
    let customerName = "Gray";
    let customer_PhoneNo = 4123123435;

//menu items
    let Pizza_Regular =9.99;
    let Pizza_Medium=11.99;
    let Pizza_Large=13.99;
    let GarlicBread=5.99;
    let Beverages=1.99;


    function coustomerDetails(){
       alert("Coustomer Details" + "\n" +
        "------------------------------------" + "\n" +
       "Coustmer Name : " + customerName + "\n" + 
       "Coustmer PhoneNo : " + customer_PhoneNo );
    }

    function menuItemsDetails() {
        alert("Menu items" + "\n" +
            "-------------------------------------" + "\n" +
        "Regular pizza : " + Pizza_Regular + "\n" +
        "Medium pizza  : " + Pizza_Medium + "\n" +
        "Large pizza   : " + Pizza_Large + "\n" +
        "Garlic Bread  : " + GarlicBread + "\n" +
        "Beverages     : " + Beverages );     
    }
    
    function priceOfpizza(pizzaSize) {
       let pizzaPrice;
       if(pizzaSize == 1){
        pizzaPrice = 9.99;
        return pizzaPrice;
       }
       else if(pizzaSize == 2){
        pizzaPrice = 11.99;
        return pizzaPrice;
       }
       else{
        pizzaPrice=13.99;
        return pizzaPrice;
       }
    }

    function priceOfGarlicBread(){
        let GarlicBreadPrice =5.99;
        return GarlicBreadPrice;
    }

    function priceOfBeverages() {
        let BeveragesPrice = 1.99;
        return BeveragesPrice;
    }
    
    function totalPriceOfPizza(noOfpizza , pizzaPrice) {
        let total_pizza_price;
        total_pizza_price=noOfpizza*pizzaPrice;
        return total_pizza_price;
    }

    function totalPriceOfGarlicBread(noOfGarlicBread , garlicBreadPrice) {
        let total_GarlicBread_price;
        total_GarlicBread_price = noOfGarlicBread * garlicBreadPrice;
        return total_GarlicBread_price;
    }

    function totalPriceOfBeverages(noOfBeverages , beveragesPrice) {
        let total_Beverages_price;
           total_Beverages_price = noOfBeverages * beveragesPrice;
        return total_Beverages_price;
    }

    function totalBillAmount(pizzaBill , GarlicBreadBill , BeveragesBill){
        let total_Amount;
        total_Amount=pizzaBill + GarlicBreadBill + BeveragesBill;
    }

    function discountedAmt(totalBillAmt) {
        let discountedAmt;
        if(totalBillAmt >= 50){
            discountedAmt = totalBillAmt - ( (10/100) * totalBillAmt );
            return discountedAmt;
        }
        else {
            return totalBillAmt;
        }
    }

    function billDetails(noOfpizza , noOfBeverages , noOfGarlicBread , totalBill , discount , totalDiscountBill){
        alert("Bill Details" + "\n" 
              + "----------------------------------"+ "\n"
              + "Pizza(large) : " +  noOfpizza + "\n"
              + "Beverages : " + noOfBeverages + "\n" 
              + "GarlicBread : " + noOfGarlicBread + "\n"
              + "-----------------------------------------" + "\n"
              + "Total Bill : " + totalBill.toFixed(2) + "\n"
              + "Discount : " +  discount.toFixed(2) + "\n"
              + "Total discount bill : " + totalDiscountBill.toFixed(2) );

    }

    let pizza_price = priceOfpizza(3);  
    let beverages_price = priceOfBeverages();
    let garlicBread_price = priceOfGarlicBread();
    
    let pizzaOrderd = 2;
    let beveragesOrderd = 3;
    let garlicBreadOrderd = 5;
    
    let totalPizzaAmt =  totalPriceOfPizza(pizzaOrderd ,pizza_price);
    let totalBeveragesAmt = totalPriceOfBeverages(beveragesOrderd , beverages_price);
    let totalGarlicBreadAmt = totalPriceOfGarlicBread(garlicBreadOrderd , garlicBread_price);
    
    let total_bill = totalPizzaAmt + totalBeveragesAmt + totalGarlicBreadAmt ;
    let discountedBill = discountedAmt(total_bill);
    let discountAmt = total_bill - discountedBill;


    coustomerDetails();
    menuItemsDetails();
    billDetails(pizzaOrderd , beveragesOrderd , garlicBreadOrderd , total_bill , discountAmt , discountedBill);




















   

   