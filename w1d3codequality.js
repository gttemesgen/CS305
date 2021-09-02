module.exports={isVowel,computeSalesCommission,calcDownpayment,
    calcDistance, convertFahrenheit, compundInterest};

function isVowel(string){
    if(
    string === "a" || string === "e" || string === "i" 
    || string ==="o" || string ==="u" ||
    string === "A" || string === "E" || string === "I" 
    | string ==="O" || string ==="U" 
    )
{
    return true;
}else{
    return false
}
}
function computeSalesCommission(isSalariedAccount,salesAmount){
    let salesCommission = 0;
    let salaried =0;
    let salesMan = prompt("are you salaried salesMan");
  //if salesMan is salaried
    if(salaried == true);{
            if(salesAmount <300){
                return 0;
            } else if(salesAmount >= 300 && salesAmount <=500 ){
                return 0.01 * sales;
            }else{
                return 0.02 * sales;
            }
            //if sales man is not salaried
    }   if(salaried == false) {
            if(salesAmount >=300){
                return 0;
            }else if (salesAmount<= 500){
            
                return 0.02 * sales;
            }else{
                return 0.03 * sales;
            }
        }
        return salesCommission;
    }
function calcDownpayment(){
    function downPayment(cost){
        if(cost  > 0 && cost <50000){
            downPayments  = 0.05 * cost;
        } else if(cost>50000 && cost<100000){
            downPayments  = 2500 + 0.01 * (cost-50000);
        }else if(cost<100000 && cost > 100000){
            downPayments = 7500 + 0.15 *(cost -200000);
        } else{
            downPayments = 5000 + 0.01 *(cost -200000);
    
    }
  
}

}
function calcDistance(x1, y1, x2, y2){
    let distance = (( x2 -x1) ** (y2 -y1) **2 **(1/2));
    return Number(Math.round(d + "e2") + "e-2");
}
function convertFahrenheit(fahrenheit){
    let celcius = (fahrenheit -32) *(5/9);
    return Number(Math.round(celcius +"e4") + "e-4") || celcius; 
}
function compundInterest(){

}