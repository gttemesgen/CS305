// Write a JavaScript program to prompt for an integer and compute the sum of all the digits.
// Input Output 123 6
// 102 3 88
function computeSum(arr){
    let sum =0;
    let input = prompt parseFloat("enter your numbers");
    for(let i =0; i<arr.length; i++){
        sum = sum+arr[i];


    }
return sum;

}
console.Log(computeSum([7,8,9,10,11,2,3]))
          