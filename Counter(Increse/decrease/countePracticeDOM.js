//this is the practice code it may have mistakes but i did not corrected it intentionally 
// and pointed them out below in end of this code and also mentioned the solution also

let info = document.querySelector('.info');
let count = 0;

let inc = document.querySelector(".increase");
inc.addEventListener('click',()=>{
     info.textContent=count++;
})

let dec = document.querySelector(".decrease").addEventListener('click',()=>{
    info.textContent=count--;

})

let res = document.querySelector('.reset').addEventListener('click',()=>{
    info.textContent=0;

    /**
     * Update the count variable in the reset
 * here the mistak was that in reset event i displayed the reset directly as 0
 * info.textContent = 0; what will happen here is that the it will diplay the 0 that is
 * correcting according to the action or requirement nut the count variable still has old value
 * so what will happen is that after the reset event if we increase or decrese the value 
 * it will resume from the old value so we should use count variable 
 * 
 * SOLUTION :
 * count=0;
 * info.textContent=count;
     */
})

/**
 * CHANGES SUGGESTED
 * Using count++ displays the value before increasing,
 *  so the UI lags behind. Same with count--.
 * SOLUTION:
 * first increment the count then set it like this : 
 *  count++;
 * info.textContent=count;  this wil reduce the lag or there will not be the lag in UI
 * 
 * Update the count variable in the reset
 * here the mistak was that in reset event i displayed the reset directly as 0
 * info.textContent = 0; what will happen here is that the it will diplay the 0 that is
 * correcting according to the action or requirement nut the count variable still has old value
 * so what will happen is that after the reset event if we increase or decrese the value 
 * it will resume from the old value so we should use count variable 
 * 
 * SOLUTION :
 * count=0;
 * info.textContent=count;
 * 
 * 
 */