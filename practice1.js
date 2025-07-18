
// the Below Example of greet was also the display of hoisting and  as weel as example for  function declarion

// greet("hell");


// function greet(params) {
//     console.log(params);

    
// }

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of
//  their scope during the compilation phase. This means you can use functions and variables 
// before they're declared in the code.


// var a;         // hoisted declaration 
// console.log(a); // undefined
// a = 10;        // initialization stays here



/// Arraw functions 
// Introduced in ES6, arrow functions provide a concise syntax for writing functions, 
// especially for short, anonymous functions. 

// let Name = (name)=>{
//    return `Hello How Are You ${name}`;
// }

// console.log(Name("sangram"));


// Call back function
// callback = a function that is passed as an argument to another function.  used to handle asynchronous operations: 
// 1. Reading a file
//  2. Network requests
// 3. Interacting with databases 
// g



fetchdata(processdata);
function fetchdata(callback){
  
    setTimeout(()=>{

        const data = "The data has been processed"
        callback(data)

    } ,3000 )

}

function processdata(data)
{
    console.log(`Processing the data ${data}`);
}