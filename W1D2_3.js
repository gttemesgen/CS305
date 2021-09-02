/*
input: cost of house, down payment
processes; calculate down payment based of the total cost of the house
out put ; downpayment
*/
function downPayment(cost){
    if(cost  > 0 && cost <50000){
        downPayments  = 0.05 * cost;
    } else if(cost>50000 && cost<100000){
        downPayments  = 2500 + 0.01 * (cost-50000);
    }else if(cost<100000 && cost > 100000){
        downPayments = 7500 + 0.15 *(cost -200000);
    } else{
        downPayments = 5000 + 0.01 *(cost -200000);

}}
console.log("expect 2000: ", downPayment(40000));
console.log("expect 2500: ", downPayment(50000));
console.log("expect 75000: ", downPayment(100000));
console.log("expect 22500: ", downPayment(200000));