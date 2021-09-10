


//Q1.  Sum numbers from the visitor
//create a script that prompts the visitor to enter two numbers 
//and then shows their sum

let input1 =parseInt(prompt("enter the first number"));
let input2 =parseInt(prompt("enter the first number"));
let sum = input1 + input2;
console.log(sum);
//check for spam
/*
q2.Repeat until the input is a number
create a function readNumber which prompt for a 
number until the visitor enters a valid numeric value
the visitor can also stor the process by entering an empty line or pressing "CANCEL ". 
IN THAT CASE, THE FUNCTION SHOULD RETURN NULL.
*/
//q3.
function readNumber (){
    do{

    let input = prompt("enter a valid number");
    while(input = "number"){
        if(number==""|| number == null){
            return null;

    }
    return +number;
}

    console.log(readNumber());

    // A random number from min to max
   //Q5. 
   function random(){

     
        let rand = Math.random() *(max-min) +min;
        return rand;
      }
      console.log(random(1, 5));
  
  
    //Q6.
    //random integer from min to max (write a mocha test with several
        // different tests)
    
        function randInteger(min, max){
            let rand1 = min + Math.random() *(Max -min);
            return Math.round(ran1);
        }
    console.log(randInteger(1,4));


    

    //  Q6.
    //  An occasional infinite loop
    /*
    This loop is infinite, It never ends. why?
    let i =0;
    while (i!=10){
        (i += 0.2;
    }
    Answer; the probability of i equals to 10
     is rear and the loop continue looping undefinately.
     Because of the losses of the precision, avodi equality 
     checks when working with decimals
    */


     
    

//Q7.Uppercase the first character
function name(str){

    function name(str){

        let name1 = str.substring(0,1).toUpperCase()+str.substring(1);
        
        }
        console.log(name("girma"));
        


//Q8. Check for spam


function checkSpam(str){
  let newStr = str.toLowerCase();
    
        return newStr.includes("vigra") || newStr.includes( "xxx");
}
console.log(checkSpam("vigra"))

//Q9.Truncate the text

function truncate(str, maxlength){
    if(str.length >maxlength){
       return  str.replace((str.length-1), "...")
    }
    
}
console.log(truncate("we are one",8));
// Q9.
// We have a cost in the form "$120" . That is: the dollar sign goes first, and then the number.
// ucFirst(str)
// Create a function   that would extract the numeric value from such string and return it.
// The example:

// Arrays
// Objects allow you to store keyed collections of values. That’s fine.
// But quite often we find that we need an ordered collection, 
//here we have a 1st, a 2nd, a 3rd element and so on. 

  function extractCurrency(str2){
      return +str2.slice(1);
  }
  let str1 = "$456";
  console.log(extractCurrency(str1));


  /*  Q10.
  Is array copied?
importance: 3
What is this code going to show?
● ● ● ●
push(...items)
shift()
To loop over the elements of the array: ●
– works fastest, old-browser-compatible. for (let item of arr) – the modern syntax for items only,
for (let i=0; i<arr.length; i++)
for (let i in arr) – never use.
To compare arrays, don’t use the == operator (as well as > , < and others), as they have no
  */
 let fruits = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruits; shoppingCart.push("Banana");
// what's in fruits?

alert( fruits.length ) //3
 shoppingCart  = ["Apples", "Pear", "Orange", "Banana"];

//Q11.

// //Array operations.
// Let’s try 5 array operations.
// 1. Create an array styles with items “Jazz” and “Blues”. 
//2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for 
//finding the middle value should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it. 5. Prepend Rap and Reggae to the array.

let styles = [“Jazz”, “Blues”];
styles.push(“Rock-n-Roll”);
styles.[Math.floor((styles.length-1)/2)] = "Classics");
console.log(styles.shift();
styles.unshift("Rap","Reggae");

//Q12
// /Calling in an array context
// The call arr[2]() is syntactically the good old obj[method]() 
// , in the role of obj we have arr, and in the role of method we 
// have 2.
// So we have a call of the function arr[2] as an object method.
// Naturally, it receives this referencing the object arr and outputs 
// the array:
 let arr = ["a",'b'];
 arr.push(function()){
     console.log(this);

 }
 arr[4]();


 //Q13
 //Sum input numbers
 function sumInput(){
     let num = [];
     while(true){
         let input = prompt("A number please?, 0 ");
         if(input == null || isInfinite(input)) break;
         num.push(+input);
     }
 }

//Q14.
function gerMaxSubSum(arr){
    let maxSum = 0;
    for(let i=0;i<arr.lengrth; i++){
        let suFixedStart = 0;

        for(let j =1; j<arr.length; j++){
            suFixedStart +=arr[j];
            maxSum = math.max(maxSum , suFixedStart);

        }
    }
    return maxSum
}
console.log(gerMaxSubSum([-1,2,3,-9])) // 5;

//Q15.
// Section: Array methods
// • Translate border-left-width to borderLeftWidth
function camelize(str) {
     return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word'] 
    map(
    // capitalizes first letters of all array items except the first one
    // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');  // joins ['my', 'Long', 'Word'] into 'myLongWord'

