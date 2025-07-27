/**
 * 
 * 
Purpose: The async keyword is used to declare an asynchronous function.

What it does:

An async function always returns a Promise.

If the async function returns a non-Promise value, JavaScript automatically wraps it in a resolved Promise.

If the async function throws an error, JavaScript automatically wraps it in a rejected Promise.} number 
 * 
 */






function addfiveafterdelay(number) {
return new Promise((resolve)=>{
    console.log("1st calculation started ");
    setTimeout(()=>{
        let result = number+5;
        console.log(`The result of 1st calculation is ${result}`);
        resolve(result);
    },3000);
})
    
}


function multiplybytwo(number){
    return new Promise((resolve)=>{
        console.log(`2nd calculation started`);
        setTimeout(()=>{
         let result = number*2;
         console.log(`The result of 2nd calculation is ${result}`);
        resolve(result);
        
        },7000)
        
    })
}
async function calculation() {
    console.log("calculation started");
    try {
        let result = await addfiveafterdelay(12);
        await multiplybytwo(result);
        await multiplybytwo(12);
    } catch (error) {
        console.error("an errror occured during the calculation ",error.message);
    }
}
calculation()


// we can also avoid in voling the calculation function explicity
//by using IIFE  Immediate Inoked function expression


// Syntx:
/**
 * (func()=>{
 * })();
 * 
 * 
 * (async()=>{
 * })();
 */

// (async function calculation() {
//     console.log("calculation started");
//     try {
//         let result = await addfiveafterdelay(12);
//         await multiplybytwo(result);
//         await multiplybytwo(12);
//     } catch (error) {
//         console.error("an errror occured during the calculation ",error.message);
//     }
// })();