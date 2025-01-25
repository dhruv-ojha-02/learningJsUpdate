const promise = new Promise(function (resolve,reject){
    resolve("I am done");
    reject("I will be Ignored!");
    resolve("Ignored!")
});

// In the example above, only the first one to resolve will be called and the rest will be ignored.



// Example of promise implementation

const promiseTwo = new Promise(function (resolve,reject){

    setTimeout(function(){
        resolve({username:"Dhruv", email:"dhruv@gmail.com"});
    },1000);
});

promiseTwo.then(function(data){
    console.log(data);
})



//Implementation of Prmomise Chaining and error handling

const promiseThree = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Dhruv", email: "dhruv@gmail.com"});
        }
        else {
            reject("Something went wrong!")
        }
    },1000);
})
.then(function(user){
    // console.log(user);
    return user.username;
})
.then(function(usernameOnly){
    console.log(usernameOnly);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("I'll surely run!");
})



const promiseFour = fetch('https://jsonplaceholder.typicode.com/users');

function getDataUsingThen(){

    console.log("Hii Dhruv");
    promiseFour.then(function(response){
        return  data = response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("E", error);
    });
    console.log("Hello Dhruv!");
}


getDataUsingThen();


