//1. Create Tree Node for the tree(refer attachment)
function TreeNode(name,children){
 this.name =name;
 this.children = children;
}
let financeManager = new TreeNode("Finance Manager");
let hrManager = new TreeNode("HR Manager");
let researchDirector = new TreeNode("Research Director");
let adminVP = new TreeNode("Administration VP",[financeManager,hrManager]);
let investmentVP = new TreeNode("Investment VP",[researchDirector])
let root = new TreeNode("President",[adminVP,investmentVP]);
//console.log(JSON.stringify(root));

//2. Write a program to count number of nodes in the trees(excluding root node).
console.log("expect 5:",countNodes(root));
function countNodes(tree){
 console.log(tree);
 let count = 0;
 if(!tree.children || tree.children.length==0)
 return 0;
 for(let child of tree.children){
 count = count+ countNodes(child);
 console.log(" Print count ",count);
 }
 return count+ tree.children.length;
}
// 3. Write a program to add property , parent with value 'true' to the nodes that have 
//children(
// not to the leaf nodes).
function addParent(tree){
 if(!tree.children || tree.children.length==0)
 return;
 tree.parent = true;
 for(let child of tree.children){
 addParent(child);
 }
 return;
}
//4. Write a program to return list all leaf nodes( that have no children).
//console.log(" expect [ 'Finance Manager', 'HR Manager', 'Research Director' ]",
//listAllLeaves(root))

function listAllLeaves(tree){
 let leaves = [];
 if(!tree.children || tree.children.length==0)
 return tree.name;
 for(let child of tree.children){
 leaves = leaves.concat( listAllLeaves(child));
 }
 return leaves;
}
//5. Create an array of objects with count of children and name of the node as properties
flattenTree(root) ->
[
 { name: 'Finance Manager', children: 0 },
 { name: 'HR Manager', children: 0 },
 { name: 'Administration VP', children: 2 },
 { name: 'Research Director', children: 0 },
 { name: 'Investment VP', children: 1 },
 { name: 'President', children: 2 }
]
function flattenTree(tree){
 let array = [];
 if(!tree.children || tree.children.length==0)
 return {name: tree.name,children:0};
 for(let child of tree.children){
 array = array.concat( flattenTree(child));
 }
 array = array.concat({name: tree.name,children:tree.children.length})
 return array;
}
// 2. a. Create a timer function that increments and prints the counter until stopped.
// (Should have following inner functions)
// run- increments and print the counter from 0 or previous counter value if present
// stop - Stop the timer and reset the counter to 0 if reset is true.
// b. Create Scheduler function to run the above timer every 10 ms and stop it after one
// second.
function createTimer(){
 let counter = 0;
 return {
 run:function (){
 console.log(counter++);
 },
 stop:function (timerId,reset){
 console.log(" STOP ")
 clearInterval(timerId);
 if(reset)
 counter = 0;
 }
 }
}
function scheduler(){
 let timer = createTimer();
 let timerId = setInterval(timer.run,10);
 setTimeout(timer.stop,1000,timerId);
}
//scheduler();
// 3. Create a function makeCaluculator that returns the inner functions to perform the
// addition,subtraction and multiplication.
// Inner function can take any number of arguments (use spread operator). (use reduce )
console.log("expect 10:",makeCaluculator().add(1,2,3,4));
console.log("expect -19:",makeCaluculator().subtract(3,1,8,9,4));
console.log("expect 3:",makeCaluculator().multiply(3));
function makeCaluculator(){
 return {
 add:function(...more){
 return more.reduce((sum,current)=>sum+current)
 },
 subtract:function(...more){
 return more.reduce((sum,current)=>sum-current)
 },
 multiply:function(...more){
 return more.reduce((product,current)=>product*current,1)
 },
 }
}
4. let data = {
 glossary: {
 title: "example glossary",
 GlossDiv: {
 title: "S",
 GlossList: {
 GlossEntry: {
 ID: "SGML",
 SortAs: "SGML",
 GlossTerm: "Standard Generalized Markup Language",
 Acronym: "SGML",
 Abbrev: "ISO 8879:1986",
 GlossDef: {
 para: "A meta-markup language, used to create markup languages such as DocBook.",
 GlossSeeAlso: ["GML", "XML"]
 },
 GlossSee: "markup"
 }
 }
 }
 }
}
// 1. Write an expression to get the value of "Acronym"
// 2. Write an expression to print the length of "GlossSeeAlso"
// console.log(data.glossary.GlossDiv.GlossList.GlossEntry.Acronym)
// console.log(data.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso.length)
// 5. Create a function to replace key with value in an object. Assume the property values are only
strings.
convertKeyToValue({key1:"value1",key2:"value2",key3:"value3"})->
{ value1: 'key1', value2: 'key2', value3: 'key3' }
function convertKey(json){
 for(let key in json){
 let value = json[key];
 json[value] = key;
 delete json[key];
 }
}
