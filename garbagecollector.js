// ----------------------------------------------
// My Notes: Garbage Collection in JavaScript
// ----------------------------------------------

// So in JavaScript, we don’t manually free memory like in C/C++.
// JS has something called a garbage collector that runs in the background.

// Its main job is to free up memory by removing things we’re no longer using.

// Basically, if a variable or object is no longer accessible in our code,
// JS will assume it’s useless and clean it up automatically.

// --------------------------
// Example 1
// -------------------------

let user = {
  name: "Sangram"
};

// At this point, the object is still in use because 'user' points to it.

user = null;

// Now the object { name: "Sangram" } is not connected to anything.
// Since we can't reach it anymore, JS will clean it up from memory.

// ------------------------------
// How does JS know what to clean?
// ------------------------------

// JS uses something called the "mark and sweep" algorithm:
// - It starts from the root (like global variables or current function)
// - Marks everything that's still connected or used
// - Anything not marked is deleted

// ------------------------------
// When does GC run?
// ------------------------------

// I don’t have control over that — JS decides when to run garbage collection.
// It usually runs when memory is low or during idle time.

// ------------------------------
// Key Point to Remember:
// ------------------------------

// If there’s no way to access a variable or object anymore,
// it becomes “unreachable”, and that’s when JS removes it from memory.

// ------------------------------
// Some mistakes that can cause memory issues:
// ------------------------------

// - Keeping unused variables around for too long
// - Using global variables unnecessarily
// - Forgetting to clear intervals or event listeners
// - Holding on to large data structures we don’t need anymore

// ------------------------------
// Summary (in my words):
// ------------------------------

// Garbage collection = automatic memory cleanup.
// I don’t need to manage memory manually in JS.
// I just have to make sure I'm not holding onto stuff I don't need.
// JS will take care of the rest.
