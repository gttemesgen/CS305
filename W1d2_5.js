/*
input: temperature of, oc
processes: calculate of, oc, use formula to convert
output: converted of and oc
*/
function convertFahrenheit(temperatureOf){

    let temperatureOC = (temperatureOf - 32) * (5/9);
    return temperatureOC;
}
console.log(convertFahrenheit(70));