# Date: 20/01/25 (Monday)

Bind() Method

The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

let nameObj = {
    name: "Tony"
}
let PrintName = {
    name: "steve",
    sayHi: function () {
        // Here "this" points to nameObj
        console.log(this.name); 
    }
}
let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();


# Asynchronous JavaScript

- JavaScript is single threaded, it means it can only handle one task at a time.

- As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

- Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface(frozen UI).  

- Asynchronous code execution allows to execution next instructions immediately and doesn’t block the flow because of previous instructions

e.g.
console.log('First');

// Set timeout for 2 seconds
setTimeout(() => console.log('Second'), 2000);

console.log('Third');


- Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.


# Event Loop

- Once the code is thrown out of JavaScript context to the browser, it cant come back on to the call stack unless:
1. the call stack is empty
2. The Global Execution Context has finished running all its code

- This checking is done by event loop in callback queue (it has tasks waiting to be executed) which continuously checks whether the call stack is empty or is there something in the callback queue or if the GEC ran all its code, and then after satisfying the  respective conditions, it puts the function in to the call stack.



read about Prototype(later), asynchronous js, why everything is object in js, class vs function, What happens to classes during compile time, similarity between class and function.