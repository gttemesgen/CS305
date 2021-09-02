
/*
input :principal, interest rate, years
process = formula
output; balance

*/

function balanceOfSaving(principal, interest, years){
    let compondInterest = 3
    let balance = principal * Math.pow(1 + (interest / 12), 12 * years);
    return balance;
}
console.log(balanceOfSaving(100,0.01,10));