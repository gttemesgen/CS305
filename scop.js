let x = 10; // Global scop
 function main() {  // main scop from  line 2 to line 19
    let x = 0; 
    console.log("x1 is " + x); // 0  at this point the x value of x 0, from its block scope
    
    x = 20; // 
    
clear
console.log("x2 is " + x);// 20 from its block scope, 20 is updated from global variable
    if (x > 0) {
         x = 30;
    console.log("x3 is " + x); //30  updated from global variable within the same scope
 }
    console.log("x4 is " + x);//  30 refrence to outer lexical enviornment
    function f(x) { 
        console.log("x5 is " + x);//50 refrence to outer lexical enviornment
    }
    f(50);
    console.log("x6 is " + x); //30 refrence to outer lexical enviornment
    }
    main();
    console.log("x7 is " + x); //Draw the scope chain// 10 from global scope