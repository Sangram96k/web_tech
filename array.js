// JavaScript arrays are special objects used to store ordered collections of values under a single variable name.
//  They let you keep multiple items (numbers, strings, objects, even other arrays) together in one variable. For
//  example, an array can hold 
// ["apple", 42, true, {name: "John"}] . JavaScript arrays are “resizable and can contain a mix of different data types” . Internally they are
//  zero-indexed, meaning the first element has index 0, the second index 1, and so on


//CREATING THE ARRAY

//WE CAN CREATE AN ARRY IN SEVERL WAYS 
// uSING ARRAY LITERALS

let arr=[1,2,3,4,5];
console.log(arr);

// USING THE ARRAY CONSTRUCTOR
let arr1 = new Array(1,2,3,4);
//arr1[0]="sangram";
console.log(arr1);

// Array.of and Array.from:  Array.of(…) creates an array from arguments,
//Array.from() create  array from the an iterable or string (e.g. splitting a string).

let ar = Array.of(1,2,3,4,2,3,7);
console.log(ar);
let ar1 = Array.from("Sangram"); // this output will be [S,a,n,g,r,a,m]
 console.log(ar1)


 // ARRAY OPERATIONS
//  Accessing and Updating Elements
// Array elements are accessed by their index using bracket notation. Remember, indices start at 0 . You
//  can read or overwrite any position:
 
console.log(ar[0]); //access the 1st elemnt of the array
console.log(ar.length); //returns the length od thw array


// ADDING OR REMOVUNG THE ELEMENT
//push() – adds one or more elements to the end of an array and returns the new length

arr.push("sangram")//adds or inserts the elemnt at the end of the array
arr.push("rohan")
console.log(arr);
// pop() – removes the last element and returns that element
arr.pop()// removes the last element of the array
arr.pop("sangram");//removes the string sangram form the array
console.log(arr);
//unshift() – adds one or more elements to the beginning of an array and returns the new length
arr.unshift("sangram");
arr.unshift("roham","vivek")// we cna add more than one elemet at once
console.log(arr); // output [ 'sangram', 1, 2, 3, 4, 5 ]

//shift() – removes the first element and returns it
let leftmost = arr.shift(); // removes the left most elemt 
console.log(`the leftmost element is ${leftmost}`); // output [ 'vivek 'sangram', 1, 2, 3, 4, 5 ]

//SLICE METHOD
// slice(start, end) – returns a new array copying elements from 
// start up to (but not including) 
// end . It does not change the original array . For example, 
// 8
//  of indices 1 and 2.

//console.log(arr.slice(1,4));//returns the subarray  fro the start index that is 1 and the end i.e 4 but do not include the 4th element 
// output: [ 'sangram', 1, 2 ]



// splice(start, deleteCount, ...items) – can remove and/or insert elements at an arbitrary position
//  (index). It mutates the array. For example, 
// arr.splice(2, 1) removes 1 item at index 2, while 
// arr.splice(2, 0, "new") inserts without deleting. Splice returns an array of removed items.

ar.splice(1,2,"sangram");//removes elements incluinf the starting index and the count as 2 so index 1 and 2 element was deleted and insed and new elemnt was added
console.log(ar);

//JavaScript arrays come with many built-in methods. Each performs a common operation
//The map() function is a built-in JavaScript array method that is
//  used to create a new array by applying a function to each element 
// of the original array without changing the original array.


// SYNTAX :array.map(function(currentValue, index, array) {
  // return something})



/*
 Key Points:
It does not change the original array.

It returns a new array.

It takes a callback function that runs on each item in the array.

*/
let arr2 =[1,2,3,4,5,6,] 
//EXAMPLE:
let sum = arr2.map((number)=>{
    return number*number;

})

console.log(`output of map fucntion is ${sum}`);
//we can do it using the lamda expression
let fact1 = arr2.map(num=>num*2);
let even  = arr2.map(num=>num%2==0);//return boolean if there is the condition
console.log(even);
console.log(fact1);

let singleele = arr2.map((number,indx)=>{
    console.log(`The number is ${number} And the index is ${indx}`);
})

/**
 Filter Method on Arrays
In JavaScript, the filter() method is used to create a new array with all elements that satisfy the 
specific condition in the provided callback function. 
It doesn't change the original array.
filter() method returns a new array with elements that 
satisfy the condition specified in the callback function.
 */


//SYNTAX
//const newArray = array.filter(_callback_fun);
//callback function: Function to test each element of the array. 
// It should return true to keep the element, or false otherwise.

let arry = arr2.filter(function(number){
    return number>0;
})
console.log(`the filter result is ${arry}`);
//using lamda expression
let lameven = arr2.filter(num=>num%2==0);
console.log(lameven);//[ 2, 4, 6 ]
//Example 2 : Filter Method on Array of Objects
let product =[
    {
        name:"headphone",
        pid:124,
        price:10

    },
    {
        name:"latop",
        pid:23340,
        price:20
    },
    {
        name:"dell",
        pid:231235,
        price:30
    },
    {
        name:"aple",
        pid:23358,
        price:40
    }
    
     
      
]

const proprice = product.filter(product=>product.price>0)
console.log(proprice);// { name: 'headphone', pid: 124, price: 10 },
                    //   { name: 'latop', pid: 23340, price: 20 },
                    //   { name: 'dell', pid: 231235, price: 30 },
                    //   { name: 'aple', pid: 23358, price: 40 }


// Reduce Method on Arrays
// In JavaScript, the reduce() method is used to reduce an array to a single value. 
// It executes a provided callback function once for each element of the array, 
// resulting in a single output value.

// SYNTAX: array.reduce(callback(accumulator, currentValue), initialValue if accumalator)
// callback: A function that executes on each element of the array, taking following arguments:
// accumulator: The accumulated value resulting from the reduction.
// currentValue: The current element being processed in the array.
// initialValue (optional): An initial value for the accumulator(note it is not the index but the actual value). 
// If not provided, the first element of the array will be used as 
// the initial value, and iteration starts from the second element.


const numbers = [1, 2, 3, 4, 5]; 

const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 1);

console.log(sum1);    //Dry Run:  acc value is 1  acc=1 and curent value is index 0
                        //acc+current :acc= 1+1=2 which is stred back in accumalator
                        //acc=acc+curr: 2+2=4  acc = 4
                        //acc=acc+curr:4+3=7 acc =7
                        //acc=acc+curr:7+4=11 acc=11
                        //acc=acc+curr:11+5=16  and this is returened 
