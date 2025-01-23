// Implementing IIFE


// Use case 1: Immedeiately Invoked
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();
 
console.log(result);



// Use case 2: To create private variables 
var counter = (function() {
	let count = 0;
	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly 
console.log(counter.count); // Output: undefined (cannot access private variable)
