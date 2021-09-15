// Section: Recursion and stack
// • Sum all numbers till the given onerecursively
function sumAll(n){
    if(n == 0){
        return 0;
    }else
        return n + sumAll(n-1);

}
console.log(sumAll(5));
//======================================
// Calculate factorial
function factorial(n){
    if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(5));
//======================================
//• Fibonacci numbers (the dynamic programming solution is optional)
function fibonacci(n){
    if(n <=1){
        return n;
    }else
        return fibonacci(n-1) + fibonacci(n-2);
    
}
console.log(fibonacci(5));

//================================================================
//Output a single-linked list

List.Next:2;
List.next.next:3
List.next.next.next:5;

//Reverse
function reverseList(list){
    let temp = List;
    let newArr = [];
    while(temp){
        newArr.push(temp.value);
        temp = temp.next;
    }
    return newArr;
    }
    //-------------------------------------
function reversArr(arr){
    for(let i= array.length-1; i>=0; i--){
        newArr.push(arr[i])

    }return newArr;
}

/*
Part II:
1. Write a recursive function that will print “name: value” to 
the console for every node in the
following tree data structure. Then write an iterative function that 
also does this. The following is
the output you should have for the recursive version. 
The iterative version should be similar, but it
is not necessary for every line to be in the same order.

body: null
div: null
label: Name
input: this was typed by a user
p: This is text in the a paragraph
*/

function printRecurisive(arr,i){
    if(i === arr.length){
        return;

    }else
    return printArrIteratively(arr, i+1);
    
}
//----------------------------
function printArrIteratively(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    //================================================

// 2. Modify both versions to return an array containing the “name:value” 
//strings for the entries rather than printing the values to the console

//the function to do the job
function collectNames(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => {
      console.log('prev is: ', prev);
      prev.push(current.name.value);
      console.log('prev is: ', prev);
      return prev;
    }, []); // get the names
  } else { // case (2)
    let names = [];
    for (let subdep of Object.values(department)) {
      console.log("names 1 is: ", names.value);
      let subdepNames = collectNames(subdep)
      console.log("subdepNames: ", subdepNames);
      names = names.concat(subdepNames); 
      console.log("names 2 is: ", names.value);
    }
    return name.value;
  }
}

console.log(collectNames(company)); 

