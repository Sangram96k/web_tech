// =======================
// Math Object in JavaScript
// =======================

// The Math object is used to perform mathematical operations.
// It's not a constructor. You don’t create Math objects (no "new Math()").

// Common Math Properties
// Math.PI        // 3.141592653589793
console.log(Math.PI);// can be used in calclying area 
// Math.E         // Euler's number (2.718...)
console.log(Math.E);
// Math.LN2       // Natural logarithm of 2
// Math.SQRT2     // Square root of 2

// Common Math Methods
// Math.abs(x)        // Returns absolute value → Math.abs(-5) = 5
// Math.ceil(x)       // Rounds up → Math.ceil(4.3) = 5
// Math.floor(x)      // Rounds down → Math.floor(4.9) = 4
// Math.round(x)      // Rounds to nearest integer → Math.round(4.6) = 5
// Math.max(a, b, ...)
let arr=[1,2,3,4,5];
    console.log(Math.max(1,2,3)) // Returns largest → Math.max(1, 2, 3) = 3
// Math.min(a, b, ...) // Returns smallest → Math.min(1, 2, 3) = 1
// Math.pow(x, y)     // x to the power y → Math.pow(2, 3) = 8
// Math.sqrt(x)       // Square root → Math.sqrt(16) = 4
// Math.random()      // Random number between 0 and 1 → Math.random()
// Math.trunc(x)      // Removes decimal part → Math.trunc(4.9) = 4







// =======================
// Date Object in JavaScript
// =======================

// The Date object is used to work with dates and times.
// You must use "new Date()" to create a date object.

// Creating Dates
let now = new Date();                // Current date and time
let date1 = new Date("2023-12-25");  // ISO date format
let date2 = new Date(2023, 11, 25);  // Year, month (0-based), day

// Common Get Methods
// date.getFullYear()   → Year (e.g., 2025)
// date.getMonth()      → Month (0 = Jan, 11 = Dec)
// date.getDate()       → Day of month (1 - 31)
// date.getDay()        → Day of week (0 = Sun, 6 = Sat)
// date.getHours()      → Hours (0 - 23)
// date.getMinutes()    → Minutes (0 - 59)
// date.getSeconds()    → Seconds (0 - 59)
// date.getTime()       → Milliseconds since Jan 1, 1970

//  Common Set Methods
// date.setFullYear(y)  → Set year
// date.setMonth(m)     → Set month
// date.setDate(d)      → Set day of month
// date.setHours(h)     → Set hours
// date.setMinutes(m)   → Set minutes

// =======================
// Math vs Date Summary
// =======================
// Math:
// - Type: Utility object
// - No "new Math()"
// - Used for: Math operations

// Date:
// - Type: Constructor function
// - Must use "new Date()"
// - Used for: Date/time handling
