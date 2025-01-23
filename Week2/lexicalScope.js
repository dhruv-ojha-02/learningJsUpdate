// Example of Lexical Scoping

function outer(){
    let user ="Dhruv";
    // console.log("Key",key); //Reference error :key is not defined
    
    function inner(){
        let key = "123";
        console.log("Inner",user);
    }
    inner();
}

// console.log("Outer",user);  //Reference Error: user is not defined
outer();