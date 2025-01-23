# Date: 22-01-25(Wednesday)

# Topics to cover
- asynchronous js, 
- why everything is object in js, 
- Specificity algorithm in CSS
- class and function (similarity and differences)
- fetch() is part of JS or browser
- What happens to classes during compile time

# Q. Why everything is an object in JS?

- Not everything is an object in JavaScript. Many things that you interact with regularly
(strings, numbers, booleans) are primitives, not objects.
- Unlike objects, primitive values are immutable. But these primitives do have object wrappers (String, Number and Boolean).
- These objects have methods and properties while the primitives do not, but the primitives 
appear to have methods because JavaScript silently creates a wrapper object when code attempts to access any property of a primitive.
- Numbers and Booleans also behave this way. Functions, however, are fully-fledged objects. 
Functions therefore can do anything objects can, including having properties.

# Specificity algorithm in CSS

- In CSS, the "specificity algorithm" is a system used by browsers to determine which CSS rule applies to 
an element when multiple rules target the same element

- How it works:
Each CSS selector is assigned a numerical weight based on the types of selectors it contains (ID, class, element).
When multiple rules target the same element, the rule with the highest specificity weight wins.

- Specificity hierarchy:
Highest specificity: Inline styles (styles directly applied to an element using the "style" attribute) 
High specificity: ID selectors (#elementId) 
Medium specificity: Class selectors (.className) 
Low specificity: Element selectors (h1, div)


# Which Web browser feature allows a custom funciton to be added into Microtask queue?

window.queueMicrotask(yourFunction)

- In web browsers the feature that allows you to add a custom function to the microtask queue 
is the queueMicrotask() method available on the Window object.
- calling window.queueMicrotask(yourFunction) will schedule your function to be executed as a microtask, 
meaning it will run after the current JavaScript execution stack is cleared but 
before callback queue functions are executed.

# Is fetch() function part of JS or Web browser?
- The "fetch" function is considered part of the web browser, specifically a feature of the "Fetch API"
which is accessible through JavaScript; meaning you use it within your JavaScript code to make HTTP requests, 
but it's technically a functionality provided by the browser itself, not a core part of the JavaScript language itself


# Q. Do the JavaScript web APIs run on a different thread than the call stack thread?

- Yes, JavaScript web APIs run on a separate thread from the call stack thread, meaning they 
operate independently from the main JavaScript execution thread, allowing asynchronous operations 
to occur without blocking the main thread.

- Although JavaScript is single-threaded, but if you wanna do a few things at once, it's possible 
thanks to Web APIs provided by browsers. So, when we wanna do something async, like an API request, 
it's handled in its own thread and moved to the Callback Queue.

# Promise States
- pending
- resolve
- reject


# IMPORTANT TO NOTE
- A Promise executor should call only one resolve or one reject. 
- Once one state is changed (pending => fulfilled or pending => rejected), that's all. 
- Any further calls to resolve or reject will be ignored.


# .then(), .catch() and .finally()

- Promise Chaining with example

An example is given in the link [promiseWithExamples](./promise.js)
