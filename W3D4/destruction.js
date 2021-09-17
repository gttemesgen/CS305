
/*Write the destructuring assignment that reads:
name property into the variable name .
years property into the variable age .
isAdmin property into the variable isAdmin (false, if no such property)*/

//Destructuring assignment
 
let user = { name: "John", years: 30};

let {name, years: age, isAdmin = false} = user;

console.Log(name); 
console.log(years);
console.log(years);
console.log(isAdmin);
//--------------------------------------

function topSalary(salaries) {
     let maxSalary = 0;
    let maxName = null;
    for(let [name, salary] of Object.entries(salaries)) {
         if (maxSalary < salary) {
     maxSalary = salary;
    maxName = name; }
    return maxName; 
}}
//---------------------------------------------
//Turn the object into JSON and back
let user = {
    name: "John Smith", age: 35
    };
    let typeOF(user2) = JSON.parse(user);// take json string and change back to js object
    let typeOf(user3) = JSON.stringify(user); //takes JS object and change to
   // jason string
}

//================================================
let total = [1, 2, 3, 4, 5];
// total.reduce(function (sum, current) {
//     return sum += current;
// }, 0);
// console.log(total); // 15
let result = total.reduce((previous, current) => previous + current, 0);
console.log(result);
//========================================================================


let numArray = [5,0, 7, 77, -20, 300, 51, 2]
let peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]

let result = numArray.map(function(num) => {return
    return num*2;}

    let result1 = peopleArray.map(function(age) => { 
        return peopleArray.age * 2;
    }
    //-------------------------------------------------------------------------
/*
 map :
 - double numbers
 - double age
filter:
 - filter all even numbers
 - filter all age > 10
 - find even, include even
 - find age > 10, include age > 10

 reduce
 - find sum of numbers
*/

let result3 = numberArray.filter(age => age > 10);
let result4 = numberArray.filter(numbers => numbers%2==0);
// let filterItems = (arr, query) => {
// return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //}
  let found = numArray.find(element => element%2==0);
  let found = numberArray.find(element => element%2==0);
  let get1 = peopleArray.find(age => age>10);
  
 // - find average of numbers
  let average = numberArray.reduce(function (avg, value, _, { length }) {
        return avg + value / length;
    }, 0);

  //- find max of numbers
  function numMax(items) {
    let  numberArray = items.reduce(
       (accumulator, currentValue) => {
            return (accumulator < currentValue ? accumulator : currentValue);
       }
   );

    return numberArray;
}

  //- find max for ages

  function numMaxAge(items) {
    let  peopleArray = age.reduce(
       (accumulator, currentValue) => {
            return (accumulator < currentValue ? accumulator : currentValue);
       }
   );
    return peopleArray;
}
  - use a chain of map filter reduce to find 
  the average age of people with even number ages

  let ages = data
})peopleArray.reduce((sum, age) => {
    let averageAge =(sum += age)/age.length
    return averageAge.age;
});

  peopleArray.filter(() => {
    return averageAge == averageAge%2==0;
}) peopleArray.map((averageAge) => {
    return averageAge;

//   - use a chain of map filter reduce to find 
//   the average age of people with odd number ages */
//   et ages = data

})peopleArray.reduce((sum, age) => {
    let averageAge =(sum += age)/age.length
    return averageAge.age;
});

  peopleArray.filter(() => {
    return averageAge == averageAge%2!=0;
}) peopleArray.map((averageAge) => {
    return averageAge;


  
