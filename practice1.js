
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



// fetchdata(processdata);
// function fetchdata(callback){
  
//     setTimeout(()=>{

//         const data = "The data has been processed"
//         callback(data)

//     } ,3000 )

// }

// function processdata(data)
// {
//     console.log(`Processing the data ${data}`);
// }

// fetchdata(processdata);






// function sum(a,b)
// {
//     return a+b;

// }
// here we stored the reference of the ,method in the variable and 
//  and if we check the type o fthe the sum1 variable it is function  so my conclusion is that if can
// invoke or call the function using the teh sum1 variable like in he below example

// let sum1 = sum;
// console.log(typeof sum1)
// console.log(sum1(1,2));

// Returning function 

function multiplier(factor){
    return function(number)
    {
        return factor*number;
    };
}
//  in the fact variabe the return function(number{.....}) is stored and when i invoked it and passed value
//  like value(2)
let fact = multiplier(5);
console.log(fact(5));