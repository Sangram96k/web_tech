class human{
    //state/prperties
   
    name="sangram";// these are all the public properties
    #age=22; // now this is private variable
    //can be accessed only in the class block
    gender="male";


    //behaviour/functions
//here we should not use the function keyworf because it is not allowed

     greet(data){
        console.log(data)
    }
    walk(){
        console.log("walking");
    }
// to access the private data outside the class scope we have 
//to create getter and setter methods

get getage(){
    return this.#age;// this refer to the currence instance of class
    //now i can access age out side the class
}

    
}  
// to access the property we have to create a the object 
let h =new human();

h.walk();
h.greet("hello your same is "+h.name+"and your age is :"+h.age);
//here it gives me age as undefined

// so we can access orivate variable using the getter method
console.log("the age is :"+h.getage)




///DEFAULT PARAMETERS
//Default parameters allow you to assign a default value to a function parameter,
//  so if no value is passed, the default is used instead.

function sayhello(data="Hello wveryone") {
    return data ;
    
}

//if i donot pass any value while i call
// the sayhello funnction then it will use the default value

console.log(sayhello());
// and if i pass the value alog the functioncall it will use the passed value
console.log(sayhello("sangram"));


// we can also give default parameter as object

function solve(value={name:"sangram",age:22}){
    return value;
}

console.log(solve());//{ name: 'sangram', age: 22 } 


//also can use function as default value

function getage()
{
    return 22;
}

function person(name="sangram",age=getage()){

    console.log("name is: "+name+"and age is :"+age)

}

person("sangram",20);
person();// display default values