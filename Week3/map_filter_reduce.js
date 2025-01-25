
const arr = [1,2,4,7,5];



// .map() examples

const out1 = arr.map(function sqaure(num){
    return num*num;
});
console.log(out1);


const out2 = arr.map(function double(num){
    return num*2;
});
console.log(out2);

// creates a new array by iterating on all values based on the given logic



// .filter() examples

const out3= arr.filter(function isEven(num){
    return num%2==0;
});
console.log(out3);

const out4 = arr.map(function greaterThanFour(num){
    return num>4;
});
console.log(out4);

// creates a new array on all values based on a given condition



// .reduce() examples

const out5 = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(out5);

const out6 = arr.reduce(function (acc,curr){
    if(acc>curr){
        acc=curr;
    }
    return acc;
},1000000007);
console.log(out6);

// return a single value out of the array, reduce takes two arg - reduce(function(acc,curr),initial val to acc)


// Chaining of map,reduce,filter is possible, for example

const users = [
    {name: "Dhruv", age: 22, isIntern: true},
    {name: "Charul", age: 22, isIntern: true},
    {name: "Naman", age: 25, isIntern: false}, 
    {name: "Yuvaraj", age: 26, isIntern: false}, 
]


const output = users.filter(function checkIntern(user){
    return user.isIntern == true;
})
.map(function printName(user){
    return user.name;
});

console.log(output);
