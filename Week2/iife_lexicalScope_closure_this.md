# Date: 17/01/25 (Friday)

### IIFE in JS

-Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
-They are typically used to create a local scope for variables to prevent them from polluting the global scope, thus avoids 
conflicting with other variables in the broader scope of your application.

For examples, refer to [iife_examples](./iife.js)

### Lexical Scoping

- The area where an item is defined or created.
- The basic concept of lexical scoping is that an inner function can access the variables defined in the outer function.

- JavaScript resolves variables by searching within the local scope first, 
then progressively moving outward through parent scopes until it reaches the global scope.

For example, refer to [lexicalScope_examples](./lexicalScope.js)

### Closure

- Closure is when a function is able to remember and access its lexical scope, even when the function is executed outside 
that lexical scope (in a different scope).

- Closures enable data hiding and abstraction
- Closures retain variables between function calls

- For example, refer to [closure_examples](./closure.js)

### Concept of ‘this’

In JS, this refers to an object. The this keyword refers to different objects depending on how it is used:
- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In a function, this refers to the global object.
- In an event, this refers to the element that received the event.
- Methods like call(), apply() and bind() can refer this to any object.


this in a method: 
/*

let user = {
    firstName: "Dhruv",
    lastName: "Ojha",
    
    fullname: function(){
        console.log(`${this.firstName}  ${this.lastName}`)
    }
};
user.fullname();
user.firstName = "Aryan";
user.fullname();

*/

- Arrow functions don’t have their own this keyword. Instead, they will use the 'this' keyword of whatever 'this' was outside the 
function when it was created.
- In other words, 'this' inside the arrow function is not bound to our call object, but instead is already bound to where the 
call object is being created originally, which in this case is the global object. And because the global object does not have a caller property, 
this.caller is undefined. 


