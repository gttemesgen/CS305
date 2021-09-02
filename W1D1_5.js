// 5. Cost of House Down Payment
// Make a defining table and then write a program that calculates down
//  payment for a home loan based on following rules. Your
//  program should prompt for the cost and write the down payment amount to the console.

functioin homeLoanPayment(num){
    let downPayment = 0;
    let cost = prompt parseFloat("enter  the cost of home");
    if(cost>=0 && cost <=50000){
        alert("downPayment 5% of the cost")

    }else if(cost >=50000 && cost <= 100000){
        alert ( "downPayment $1000 + 10% of(cost-50000)")
    }else if(cost >=100000 && cost<= 200000){
        alert("downPayment is 2000 +15% of (cost-100000");
    }else{
        alert("downPayment 5000 +10%(cost-200000")
    }
    return cost;
}
console.log(homeLoanPayment(300000))