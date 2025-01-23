# Date: 21/01/25 (Tuesday)

- Exercises on Asynchronous JS (implementation of setTimeout) at csbin.io

# Q. What is Promise? 

A Promise is a special JavaScript object. It produces a value after an asynchronous 
operation completes successfully, or an error if it does not complete successfully 
due to time out, network error, and so on.

- Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.
 
# Q. How Promise works under the hood?

- Explanation with the help of microtask queue and event loop with the examples given below.
- Introduction to Micotask Queue( Promise Handling)

e.g. 1
function display(data){
     console.log(data);
}

const futureData = fetch(`www.facebook.com/dhruv/…`);   //contains hi as data

futureData.then(display);	//attached display functionality in to on fulfillment array

console.log(“First”);

// Output: First
           hi (in data)

- The Microtask queue has a higher priority than the callback queue which means that if both queues are scheduled to be executed at the same time, the microtask queue will be executed first.
Understanding this with the help of example: 

e.g.2 

function display(data){ console.log(data)};
function printHello(){console.log(“Hello”);}
function blockFor300ms(){// large loop}

setTimeout(printHello,0);

const futureData = fetch(`https://www.facebook.com/dhruv…`);    //contains hi as data

futureData.then(display);

blockFor300ms();

console.log(“First”);


// Output: First
           hi
           Hello

Explanation : display function is in the microtask queue hence it is prioritized over printhello function which was in the callback queue.

# Promise States
- pending
- resolve
- reject