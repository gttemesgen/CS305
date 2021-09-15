/1. Log to the console the names of everyone in the tree.
function nameEveryOne(arr){

   if(Array.arr(tree)){
       return tree.reduce(prev, current => {console.log('prev is: ',  prev);
        prev.push(current.name);
        return prev;
   }
}else{
    let names = [];
    for(let subtree of Object.values(tree)){
        console.log("names 1 is : ", names);
        let subtreeNames = allNames(subtree){
            console.log("subtreeNames: ", subtreeNames);
            names = names.concat(subtreeNames);
            console.log("names 2 is: ", names);
        }
        return names;
    }
}
console.log(nameEveryOne(tree));
/*
2. Given a target value, return true or false if there is a node in 
the tree with the target value. E.g.,
contains(tree, “Lisa”) → true
contains(tree, “Crusty”) → false
*/
//with out recursation
function conains(tree, name){
    if(tree.value===target){
        let index = tree.descendents.findIndex(function(item)){
            return item.value == target;
        });
        if(index>=0)
        return true;
        let index = tree.descendents[0].descendents.findIndex(function(item)){
            return item.value == target;

    });
    return index>=0;
}

//recursively
function containsRecursion(tree, name){
    let match = false;
    if(tree.value===name)
        return true;
    if(Array.isArray(tree)){
        tree.forEach(function(item){
            if(item.value===name){
                match= true;
            }else if(!match && item.descendents.length>0)
            {
                match = containsRecursion(item.descendents,name);
            } 
        });

    }else if(tree.descendents.length>0){
        match= containsRecursion(tree.descendents,name);
    }
    return match;
    /*
    3. Given a target value, return the subtree with the found node or null if
     no match. Extend the
tree to have a more interesting test. Create a mocha test to run at least 2 or 3 
tests on your
tree.
findSubtree(tree, “Homer”) → subtree with Homer as the root
    */

function containsRecursion(tree, name){
    let match = false;
    if(tree.value===name)
        return true;
    if(Array.isArray(tree)){
        tree.forEach(function(item){
            if(item.value===name){
                match= true;
            }else if(!match && item.descendents.length>0)
            {
                match = containsRecursion(item.descendents,name);
            } 
        });

    }else if(tree.descendents.length>0){
        match= containsRecursion(tree.descendents,name);
    }
    return match;

}
