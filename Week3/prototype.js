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




// Added a custom method to all String objects using String.prototpe: 

let anotherUsername = "HelloDhruv     "

String.prototype.trueLength = function(){
    console.log(`${this}`); //returns the current context
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dhruv    ".trueLength()
"ojha ".trueLength()



// Impelementation of inheritance using prototypesx

let dog = {
    bark: true,
    legs: 4
}

let labrador = {
    color: "brown",
    name: "Luffy"
}


// To inherit the properties of 'Dog' to 'labrador object,
// we can use Object.setPrototypeOf(obj, prototype);

Object.setPrototypeOf(labrador,dog);

console.log(labrador.bark);
console.log(labrador.legs);
console.log(labrador.color);


// It can be observed that 'labrador' has inherited the properties of 'dog', thus illustrating inheritance in JS