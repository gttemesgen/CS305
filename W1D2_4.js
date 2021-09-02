
/*
input: number, 
processes: sum, module to of 10 to go across 
the number in one digit
output sum, products
*/

function sumDigits(num){
    let sum = 0;
    for(let i =0; i<num.length; i++){
        sum = sum+ num%10; 
        num = Math.floor(num/10)
    }
    return sum;
}
console.log(sumDigits(12345))

function multiDigits(num){
    let product= 1;
let j = 1;
while(j!==0){
    product = product * num%10;
    num = Math.floor(num/10);
}
return product;
}
console.log(multiDigits(1234))