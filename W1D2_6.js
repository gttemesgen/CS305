/*
input:x1, x2, y1, y2,formula
processes: calculate using distance formula
output: distance
*/
function calcuDistance(x1,x2,y1,y2){
    let distance = Math.sqrt((x2-x1),2) +( (y2-y1),2)
    return distance;
}
console.log(calcuDistance(5,5,2,5))