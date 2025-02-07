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

    return console.log("Bonus:" , "$" + salary * (bonus[performanceRating]));
};

calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");