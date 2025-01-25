// Handling promise using async/await

const getData = async function(){

    console.log("Hii Dhruv 2");
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    console.log("Hello 2");

}

// getData();


// Good example to understand how async/await works under the hood

const p1 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("Promise 1 fulfilled!");
    },10000);
});

const p2 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("Promise 2 fulfilled!");
    },5000);
});

async function handlePromise(){
    console.log("test 0");

    const val1 = await p1;
    console.log("Hello 1")
    console.log(val1);



    console.log("test 1");
    const val2 = await p2;
    console.log("Hello 2");
    console.log(val2);
}

handlePromise();