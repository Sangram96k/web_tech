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
arr.shift(); // removes the left most elemt 
console.log(arr); // output [ 'vivek 'sangram', 1, 2, 3, 4, 5 ]

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
