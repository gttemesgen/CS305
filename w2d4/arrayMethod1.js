1.//Translate border - left-width to borderLeftWidth
functioncamelize(str){
    return str
    .split('-')//splits "my long words into array
    //["my", "long", "word"]
    map(
        (word, index) => index == 0 ? word:word[0].
        toUpperCase()+ word.slice(1)

    )
    .join(' ' )// joins  int to "myLongWords."}
}

2,/*
Filter range
Write a function filterRange(arr, a, b) that gets an array arr , 
looks for elements with values higher or equal to a and lower or 
equal to b and return a result as an array.
The function should not modify the array. It should return
 the new array. For instance:


*/
function filiterRange(arr, a ,b){
    return arr.filter(item=>(a<=item && item<= b))
}

//3.Filiter range "in place"

function filiterRangeInPlace(arr, a, b){
    for(let i=0; i<arr.length; i++){
        let value = arr[i];
        if(value<a || value >b){
            arr.splice(1,1)
            i--;
        }
    }
}

//4. Sort in decreasing order

function arrSort(arr,a,b){
arr = [4,5,6,3,6];
arr.sort(a,b) => b-a;
return Int16Array
}
console.log(arr);

//5. copy and sort array


function copySort(arr){
    // arr= [1,2,3,4,5];
    // //to copy
    // let nArr = arr;
    // nArr.sort(a,b)=>a,b;
    // return nArr;
    //we can use slice() to make a copu and run the sort on it

    return arr.slice().sort();
}
console.log(nArr);

//6 . create and extendable caculator
function clculator(){
    this.method = {
        "-": {a,b} => a-b,
        "+" : {a,b} => a+b
    };
    this.calculate = function(str){
        let split = str.split( '  '),
        a = +split;oit[0],
        un =split[1],
        b= +split[2];
    
    if(!this.method[un] || isNan(a) || isNan(b)) {
        return NaN;
    }
    return this.method[un](a,b)
};
this.addMethod = function(name, func){
    this.method[name]= func;
};
}

//6.  Map to names
// You have an array of user objects, each one has user.name . 
//Write the code that converts it into an array of names.
let userMap = users.map(user =>({
    fullName: `${user.suname},
    id: user.id`
}));

//Map to object
let john = { name: "John", surname: "Smith", id: 1 }; 
let pete = { name: "Pete", surname: "Hunt", id: 2 }; 
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [jhn, pete, mary];
let usersMapped = users.map(user =>
     { fullName: `${user.name} ${user.surname}`, 
     id: user.id
});


//7.sort users by age
function sortByAge(arr) { 
    arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 }; 
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];

//8.Shuffle an array
 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    }
    let arr = [1, 2, 3]; 
    shuffle(arr); 
   console.log(arr);

   //9. Get average age

   function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }
    let john = { name: "Alma", age: 25 }; 
    let pete = { name: "Girma", age: 30 };
     let mary = { name: "Dula", age: 29 };
    let arr = [ kelamu, deb, gonf ]; 
    console.log( getAverageAge(arr) ); // 28


// 10 Filter unique array members
function unique(arr) { let result = [];
    for (let str of arr) {
    if (!result.includes(str)) {
    result.push(str); }
    }
    return result; }
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
     "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    //11 Create keyed object from array

    function groupById(array) {
        return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj; }, {})
        }



