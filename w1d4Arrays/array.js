"use strict";

const { listenerCount } = require("node:process");

/* You need the module.exports when testing in node. 
 Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply,reverseArray, reverseArrayInPlace };
 //add all of your function names here that you need 
 //for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    let max;
    if(a>b && b>c){
        max = a;
    }else if(b>a && b> c){
        max = b;
    }else {
        max =c;
}
return max;
}
console.log(maxOfThree(3,4,100));
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let result = 0;
    for(let i =0; i< arr.length; i++){
        result = result + arr[i];
    }
    
    return result;
}
console.log(sum([5,6,7,8,10,20]));

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){

    let product = 1;
    for(let j=0; j<arr.length; j++){
        product = product * arr[i];
    }

    return result;

}
console.log(multiply([5,20]));

function findLongestWord(arr){
    let longest = 0;
    for(let i =0; i<arr.length; i++){

    }
    return findLongestWord;
}

function reverseArrayInPlace(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  //array.splice(0, array.length / 2);
  return array;
};
let theArray = ["f", "e", "d", "c", "b", "a"];
reverseArrayInPlace(theArray);
console.log(theArray); // -> ["f", "e", "d", "c", "b", "a"]

function reverse1(arrays) {
    let temp;
    let leftIndex = 0;
    let rightIndex = arrays.length-1;

    while(leftIndex < rightIndex){

temp = leftIndex;
leftIndex = rightIndex;
rightIndex = temp;

leftIndex++;
rightIndex--;

    }
return;
}
console.log(reverse1(3,5,6,7));

function scoreExams(arrExam){

    let score =0;
    for(let item of arrExam){
        if(item.answer === item.key){
            score ++;

    
        }
        return score;
    }


}
let num = [[[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3, 1, 2,4]];
console.log(scoreExams(num))

