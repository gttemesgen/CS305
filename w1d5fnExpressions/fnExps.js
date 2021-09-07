"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */

    function double(array){
        return times100(array * 2);
    }

/**
 * @returns {number} 100 times the input
 */
 function times100(array){
     return array * 100;

 }

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(array, double){
    let result = [];
    for(let i =0; i<array.length; i++){
        result.push(double(array[i]));

    }
    console.log(result);
}
myMap([-10,0, 10, 20],times100);

