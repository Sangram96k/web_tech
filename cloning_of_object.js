// ==============================
// SHALLOW COPY vs DEEP COPY
// ==============================

// SHALLOW COPY:
// -------------
// Only copies the outer object.
// If the object has nested objects/arrays, their references are copied (shared).
// So, changes to nested data in the clone will affect the original.

// DEEP COPY:
// -----------
// Copies everything, including nested objects/arrays.
// The clone becomes completely independent of the original.

//NOTE : if the object donot have inner/nested object then both the shallow copy and 
// deep copy are the same


// ==============================
// EXAMPLE 1: Shallow Copy with spread operator
// ==============================

let originalUser = {
  name: "Sangram",
  address: {
    city: "Pune",
    pin: 411001
  }
};

// Make a shallow copy
let shallowUser = { ...originalUser };

// Modify top-level property
shallowUser.name = "ShallowClone";

// Only the shallow copy changes
console.log("Original name:", originalUser.name);       // Sangram
console.log("Shallow name:", shallowUser.name);         // ShallowClone

// Modify nested property
shallowUser.address.city = "Mumbai";

// Both original and shallow copy are affected
console.log("Original city:", originalUser.address.city); // Mumbai
console.log("Shallow city:", shallowUser.address.city);   // Mumbai

// WHY?
// The 'address' object is shared between both originalUser and shallowUser
// because the copy was shallow

//cloning using the assig method
let src = {
    name:"sangram",
    age:22
}
let clone = Object.assign({},originalUser,src);//we can clone 2 object in one as well
console.log("Cloning object uing the assign method",clone);

// we can also clone it using the iterations

let newclone={}

for (let key in src) {
    let newkey = key;
    let newval = src[key]

    // insert it into the new object
    newclone[newkey]=newval;
    
}

console.log("clone object usinf iteration is :",newclone);
//clone object usinf iteration is : { name: 'sangram', age: 22 }





// ==============================
// EXAMPLE 2: Deep Copy using JSON
// ==============================

let deepOriginal = {
  name: "Sangram",
  skills: {
    frontend: "JavaScript",
    backend: "Python"
  }
};

// Deep clone using JSON
let deepClone = JSON.parse(JSON.stringify(deepOriginal));

// Modify top-level property
deepClone.name = "DeepClone";

// Modify nested property
deepClone.skills.frontend = "TypeScript";

// The original is NOT affected
console.log("Original name:", deepOriginal.name);             // Sangram
console.log("Original frontend skill:", deepOriginal.skills.frontend); // JavaScript
console.log("DeepClone name:", deepClone.name);               // DeepClone
console.log("DeepClone frontend skill:", deepClone.skills.frontend);   // TypeScript

// WHY?
// JSON.stringify() + parse() creates a completely new object with all nested levels duplicated

// ==============================
// EXAMPLE 3: Shallow copy in real-world scenario
// ==============================

let cart = {
  items: [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
  ]
};

// Shallow copy of cart
let newCart = { ...cart };

// Apply discount to first item in newCart
newCart.items[0].price = 45000;

// Original cart also gets affected
console.log("Original cart price:", cart.items[0].price);  // 45000
console.log("New cart price:", newCart.items[0].price);    // 45000

// WHY?
// cart.items is an array (reference type)
// So both cart and newCart share the same items array

// ==============================
// EXAMPLE 4: Deep Copy for safe modification
// ==============================

// Deep copy using structuredClone (modern browsers & Node 17+)
let safeCart = structuredClone(cart);

// Apply new price safely
safeCart.items[0].price = 40000;

console.log("Original cart price:", cart.items[0].price);  // 45000 (unchanged)
console.log("Safe cart price:", safeCart.items[0].price);  // 40000 (independent)

// ==============================
// SUMMARY
// ==============================

// SHALLOW COPY
// - Copies top-level properties only
// - Nested objects/arrays are still shared
// - Use cases: simple flat objects

// DEEP COPY
// - Recursively copies everything (no shared references)
// - Safer for complex or nested structures
// - Use cases: working with data safely (APIs, forms, undo/redo, etc.)

// METHODS:
// - Shallow: { ...obj }, Object.assign()
// - Deep: JSON.parse(JSON.stringify(obj)), structuredClone(), lodash's _.cloneDeep()
