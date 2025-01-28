// Basic example to understand function as objects

function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5.power);
// The above example is used to understand that even function behaves as object in JS
// because we can use the dot operator to access various properties for them, as we do in objects.




// Understanding Prototype in JS

// All JavaScript objects inherit properties and methods from a prototype.

// The Object.prototype is on the top of the prototype inheritance chain

function user(username,age){
    this.username = username;
    this.age = age;
}

console.log(user.prototype);    //returns {}


// The JavaScript prototype property also allows you to add new methods to objects constructors:
// Example of defining own prototype methods for an object

user.prototype.printName = function (){
    console.log(`Hello, my name is ${this.username}`);
};

let user1 = new user ("Dhruv", 22);
user1.printName();