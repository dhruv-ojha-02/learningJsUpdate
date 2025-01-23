# Date: 16/01/25 (Thursday)

I started with reading the 2nd chapter from the Book (You don't know JS Yet) followed by the use of variables and its types.
Also about how to use and traverse arrays and objects in JS

Then I learnt about Objects copying and referncing from javascript.info
- Object copying and reference

- Primitive data types are stored and copied by value, whereas 
non-primitive data type are stored and copied by reference.

- Objects are copies by Reference and the primitive values are copied by whole value
- A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
- When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "Dhruv" };
let admin = user; // copy the reference
Now we have two variables, each storing a reference to the same object:

- First class functions: the functions can be assigned to any other variable or passed as an argument or can be returned by another function.


- Function Expressions , Named function and Arrow functions


- Coding exercise on Implementing function expression from Frontend Masters
[function_expression_exercise](./ex-1.md)
[exercise_solution](./ex-1-solution.js)
