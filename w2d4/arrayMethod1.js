//Translate border - left-width to borderLeftWidth
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

/*
Filter range
Write a function filterRange(arr, a, b) that gets an array arr , 
looks for elements with values higher or equal to a and lower or 
equal to b and return a result as an array.
The function should not modify the array. It should return
 the new array. For instance:


*/
