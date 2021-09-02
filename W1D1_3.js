function balanceOfSaving(){
    let intialAmount = prompt parseFloat("enter intial amoutn");
    let annualInterestRate  = prompt parseFloat(" annual interest rate");
    let numberOfYearstoCompund = prompt parseFloat("number of years to compound");
    balanceOfSaving = intialAmount * Math.pow(1 + (annualInterestRate/numberOfYearstoCompund), numberOfYearstoCompund * annualInterestRate);

    return balanceOfSaving;

}
console.log(balanceOfSaving());