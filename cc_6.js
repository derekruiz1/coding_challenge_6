//Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    [Profit = (sellingPrice - costPrice) * unitsSold] //Formula to calculate profit
    console.log("Total Profit:", "$" + Profit) 
};
calculateProfit(20,30,100); 
calculateProfit(50,70,200);

//Task 2 - Function Expression
const calculateSalesTax = function calculateSalesTax(amount, taxRate) {
    [SalesTax = amount * taxRate]
        console.log("The sales tax is: $","$" + SalesTax)
};
calculateSalesTax(100,0.07);
calculateSalesTax(500,0.01);

//Task 3 - Arrow Function
const calculateBonus = (salary, performanceRating) => {
    const bonus = {
        "Excellent": 0.2,
        "Good": 0.1,
        "Average": 0.05
    }; //Parameters for bonus 20%, 10%, 5% respectively

        console.log("Bonus:" , "$" + salary * (bonus[performanceRating]));
};

calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");

//Task 4 - Parameters and Arguments
let calculateSubscriptionCost = (plan, months, discount = 0) => {

let rate;
 if (plan == "Basic") {
    rate = 10
} else if (plan == "Premium") {
    rate = 20
}  else if (plan == "Enterprise") {
    rate = 50
} //Different Rates offered

let total = (rate * months) - discount //Calculating rate with discount 

console.log("Cost:","$" + total)
}

calculateSubscriptionCost("Basic", 6, 10)
calculateSubscriptionCost("Premium", 12, 0)

//Task 5 - Returning Values
let convertCurrency = (amount, exchangeRate) => {
console.log("Converted Amount","$" + (amount * exchangeRate)); //Multiples amount with exchange rate
}
convertCurrency(100,1.1)
convertCurrency(250,0.85)

//Task 6 - Higher-Order Functions

let orders = [200, 600, 1200, 450, 800] //Original Array

let applyBulkDiscount = (orders, discount) => {
   let discountOrders = orders.map(discount) //Discounting the array 
    console.log("Totals:", discountOrders) 
};

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); 

//Task 7 - Closures
function createExpenseTracker() {

    let expenses = 0; //Beginning balance

    return function (newExpense) { 
        expenses += newExpense; //Formula to add expenses on to each other
        console.log("Expenses:", "$" + expenses); 
    };
}

let tracker = createExpenseTracker(); 
tracker(200); 
tracker(150); 

//Task 8 - Recursion in JavaScript 
function calculateYearsToPromotion(employeeLevel) {
    
    if (employeeLevel >= 10) {
        return 0 //Cap that stops anything past 10 
    }
    else 
return ((10 - employeeLevel) * 2); //Formula calculating promotion
}

console.log("Years to Promotion:", calculateYearsToPromotion(7)); 
console.log("Years to Promotion:", calculateYearsToPromotion(5)); 
