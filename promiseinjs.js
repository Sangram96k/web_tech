// function getdata(dataid,nextdata){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//         //console.log("data",dataid);
//        // reslove("success");
//         reject("Eoor occured"
//         );

    

//     },5000)

//     });

// }


// let p = getdata(123);
// console.log(p);

// setTimeout(()=>{
//     console.log(p);
// },5000);




//Promise chaining
function addfiveafterdelay(number){
    return new Promise((resolve)=>{
        console.log(`The first step is starting ....`);
        setTimeout(()=>{
            let result = number+5;
            console.log(`The step one is complete the result is${result}`);
            resolve(result);
        },5000);
    })
}

function multiplybytwo(number){
    return new Promise((resolve)=>{
    console.log(`The second process is starting`);
    setTimeout(() => {
        let result = number*2;
        console.log(`the result is ${result}`);
        resolve(result);
    }, 5000);
    })
}

addfiveafterdelay(10).then((firstresult)=>{
    console.log(firstresult);
    return multiplybytwo(firstresult);
}).then(finalresult=>{
    console.log(`The final result is ${finalresult}`);
})