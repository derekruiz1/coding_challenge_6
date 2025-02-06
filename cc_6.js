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
