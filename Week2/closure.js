//Example of Closure 
function outer(){
    let user ="Dhruv";
    
    function inner(){
        console.log(user);
    }
    
    return inner;   //return the function reference
}

const myFunc = outer();
myFunc();

/*

- since outer is executed ,its scope is gone and if thats the case,
- how will lexical scoping work now
- The thing is ,instead of only returning the function, its complete lexical scope is also returned to this myFunc variable
this is what closure is at a broader scope and thus it also allows lexical scoping in

*/


// Example of closure to create private variables

const addCounter = (function out(){
    let counter = 0;

    return function inn(){
        counter+=1;
        return counter;
    }
})();

addCounter();
addCounter();
addCounter();

console.log(addCounter.counter); // will throw undefined because the variable is private and can't be accessed directly

