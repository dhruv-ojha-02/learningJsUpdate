// Hositing with var

console.log(a); // undefined
var a = 5;



// Hoisting with let/const

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;



// Funciton Hoisting

hello();    //Hello world!
function hello() {
    console.log("Hello world!");
}



// Hoisting with classes

const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Dhruv";
    }
}