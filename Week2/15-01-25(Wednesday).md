# Date: 15/01/2025 - Wednesday

# Topics to cover: 
- Var, let and const difference
- Hoisting
- Functional and block scope(different scopes too)
- How file is parsed(JS)
- Object creation ,then object copying



# Variables

- Var allows recreation of a variable, unlike let and const. It has Global scope or function scope.

- let has block scope. It can’t be used outside of a particular code block.

- Const has block scope and const variables cannot be reassigned once declared. 
User have to assign a value to const variable during declaration.


# Hoisting

-Hoisting is JS default behavior of moving all declarations to the top of the current scope.

Q. How Hoisting works with var, let and const?

A. Temporal Dead Zone - Variables defined with let and const are hoisted but 
without any default initialization with undefined, unlike var. -> will give Reference Error


# JavaScript Scopes

- Block - { } -> can only be accessed inside a particular block.
- Function - can not be accessed outside the function.
- Global - can be accessed anywhere on the web page.


# Parsing of JS files

- A JS file is parsed by a JS Engine, which reads the code line by line, breaking the code into tokens (variables, keywords and operators).
- Then, the tokens are analyzed to ensure they follow the syntax rules of JS.
- The next step is AST generation (Abstract Syntax Tree) which the engine can easily interpret.


# Data types:

- JS is dynamically typed meaning that the data type of variable is checked and determined during run time.

e.g.
let num = 123;	// an integer
num = 1.23;	// a floating point number

- 7 primitive data types (value only hold a single thing)
- 1 non-primitive data type: object (hold collection of data and complex entities).

- typeof operator allows us to see which type is stored in the variable.


# Type Conversion

- Can happen implicitly (e.g. alert converts any value to string before showing it to user)
- Can be done explicitly (e.g. when we read a value from a string based source but expect a number instead)


# Comparisons in JS

- (string comparisons, same data type comparison, different data type comparison etc)
	
- Equality check is done by type conversion of values before comparing (0 == false).    // true
- Strict Equality Check is done without type conversion before comparing (0 === false) // false

# Conditional Branching 
# Logical Operators 
# Loops in JS (for loop, while loop, do-while loop)


# Functions

- Good practice: Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to 
split the function into a few smaller functions.

# Arrow functions 

((arg1, arg2, …) => {

    // lines of code specifying what does the function do

});


# Objects Creation:

- Two ways to create an object:
(i) let obj = new Object();
(ii) let obj = {};

- Add properties to the object in the form of key-value pairs and access them using the dot(.) operator or square braces [ ].


- Traversing the properties of an object:

let user = {
  name: "Dhruv",
  age: 22,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // Dhruv, 22, true
}


A good exercise on the concept of Chaining: 
[exercise_with_solution](./chaining_exercise.js) File is provided in the folder


