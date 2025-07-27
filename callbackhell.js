/**
 * Callback hell, also known as "pyramid of doom," is a 
 * common problem in JavaScript (and other asynchronous
 *  programming languages) that arises when multiple
 *  asynchronous operations are nested within each other. 
 * It gets its name from the way the code looks, with each
 *  nested callback function indenting further to the right, 
 * resembling a pyramid.
 * 
 * -----------------------------------------------------
 * 
 * Imagine you have a series of operations that need to
 *  happen in a specific order, and each operation is 
 * asynchronous (meaning it doesn't block the execution 
 * of the rest of your code while it's waiting). 
 * For example:

1Fetch user data from a server.

2 Once user data is retrieved, fetch their orders using the user ID.

3 Once orders are retrieved, fetch details for each product in those orders.

4 Finally, display all the combined data.

getUser(function(user) {
  getOrders(user.id, function(orders) {
    getProducts(orders, function(products) {
      displayData(user, orders, products, function() {
        console.log("All data displayed!");
      });
    });
  });
});



 */

function getdata(dataid,nextdata) {

    setTimeout(()=>{
console.log("data",dataid);
if(nextdata){
    let data ="sangram"
    nextdat();
}
    },5000)

    
}
//this code will give error in browser
//getdata(1,getdata(2))
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    })
});