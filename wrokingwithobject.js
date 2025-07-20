// creating object using object literals
let value1='Sangram';
let value3="memo";
let value2="bark";
let car = {
    name:"Skoda",
    model:"Fabia",
    year:2008,
    price:2024,
    value:25500,
    property1: value1,     // ✅ property name is an identifier (like a variable name)
  2: value2,              // ✅ property name is a number (converted to a string behind the scenes)
  "property n": value3,  //key can also be a string
   // and object can also cantaion the functio
   greet1 :function(){
    return `Hello This car name is ${this.name}`;

   },


   //we can also create object inside the objet as below
person:{name:"sangram",age:22}


    
  
}


console.log(car.name);
console.log(car.greet1());//Hello This car name is Skoda
console.log(`the person name is ${car.person.name} and his age is ${car.person.age}`);//sangram

// we can also create a objetc using constructor function 

{

    function Car(name,model,owner){
        this.name=name;
        this.model=model;
        this.owner=owner;

    }
    function person(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    // using class to create the object
    class secondowner{
        constructor(name,age,gender){
            this.name=name;
            this.age=age;
            this.gender=gender;
        }

        

    }

    let secondowner1 = new secondowner("sangram1",22,"male");
    let owner = new person("sangram",22,"male");
   // we can pass/set the object as a value to another objects key
    let mycar = new Car("skoda","fatia",secondowner1);
    //  we cna also set new property
    mycar.color="black";
    console.log(mycar);  //Car {
                          //   name: 'skoda',
                          //   model: 'fatia',
                          //   owner: secondowner { name: 'sangram1', age: 22, gender: 'male' },
                          //   color: 'black'
// }





    console.log(mycar.color);
    console.log(mycar.owner.name);
}

{ 
     // creating the object using the object() method
     let obj = new Object();//creates and emply object and propeties can be added afterwards
     obj.name="Ravi";
     console.log(Object.getPrototypeOf(obj) )

     console.log(obj["name"]);   
     
     /**
 Objects can also be created using the Object.create() method.
  This method can be very useful, because 
  it allows you to choose the  prototype object for the object you want to create, 
  without having to define a constructor function.
 */

let ob2 = obj;//gives reference of the obj to the ob2
console.log(ob2);
  let obj1 = Object.create(obj); // obj 1 inherit car
  obj1.age=22;
  console.log(obj1.name);//Ravi
  console.log( obj1);

//   Adding properties to the object 

const str = "myString";
const rand = Math.random();
const anotherObj = {}

ob2.type="Dot syntax for a key named type";
ob2[str]="This key is in variable str use [] notation";
//In above teh ob2[str] here str is not the key but the 
//value stored in the str vvariable is key if we try to access 
// the key using str it will retrn undefined
ob2["sangram"]="key is a string so use [] notation ";
ob2[rand]="A random number is the key here"
// here in ob2[rand] the random number is converted in to 
//into string and added as key
ob2[anotherObj]="this key os an object named another object which is empty"
//In the above code, the key anotherObj is an object, which is neither a string nor a symbol. 
// When it is added to the ob2 js calls to string function and
//convert it to a string and set that strig as the key 
ob2[""]="Here the key is empty string"





// how to iterate over the object 
// we can use for in loop
//displays all the properties of the object
// All enumerable properties

// Own + inherited (from prototype)  

for(let key in ob2)
{
    console.log(`this the elemts of the object ${key}`);
}
}
//Object.keys():
// This method returns an array of keys (also called property names)
//  that belong directly to the object 
let ob2 ={
    name:"sangram",
    Age:22,
    Gender:"male"
}


console.log(Object.keys(ob2));//[ 'name', 'Age', 'Gender' ]
//if want to check the length of the obectj or number of properties in object 
// then apply the length to the array that is returned by the 
// Object.keys() method like below

console.log(Object.keys(ob2).length);//3
//Object.getOwnPropertyNames(obj)
//This method returns an array of all own property names (keys)/not inherited of the object — whether enumerable or not.

console.log(Object.getOwnPropertyNames(ob2));//[ 'name', 'Age', 'Gender' ]

//if want specific property
console.log(Object.getOwnPropertyDescriptor(ob2,"Age"));
// out put
/**
 * value: 22 → the value of the property Age

writable: true → you can change the value

enumerable: true → it will show up in loops like for...in or Object.keys()

configurable: true → you can delete or change the property's descriptor
 */