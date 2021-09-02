
/*
input: sales amount, sale Man , commission persentage, 
process ; calculate the commission sales* persentage, use of selection if
output; sales commission
*/

function computeSalesCommission(Boolean, salesAmount){
    let salesCommission = 0;
    let salaried =0;
    let salesMan = prompt("are you salaried salesMan");
  //if salesMan is salaried
    if(alaried == true);{
            if(salesAmount <300){
                return "There is no " +  salesCommission;
            } else if(salesAmount >= 300 && salesAmount <=500 ){
                return 0.01 * sales;
            }else{
                return 0.02 * sales;
            }
            //if sales man is not salaried
    }  if(salaried == false){
            if(salesAmount >=300 && salesAmount >= 500){
                return 0.02 * sales;
            }else{
                return 0.03 * sales;
            }
        }
        return salesCommission;
    }
    
    console.log("expect 0:", computeSalesCommission(true,200));
    console.log("expect 0:", computeSalesCommission(false,200));
    console.log("expect 3:", computeSalesCommission(true,300));
    console.log("expect 6:", computeSalesCommission(true,300));
    console.log("expect 65:", computeSalesCommission(true,3500));
    console.log("expect 100:", computeSalesCommission(false,3500));


