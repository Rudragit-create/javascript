// console.log("This will be printed immediately."); // exectude first


// // thirdly, this will be printed after 2 seconds
// function sayHello(){
//     console.log("Hello, World!");
// }

// setTimeout(() => {
//     sayHello();
// }, 2000);   

// // then this loop secondly
// for(let i = 0; i < 5; i++){
//     console.log(`Iteration ${i + 1}`);
// }


// This is async nature of JavaScript, it will not wait for the setTimeout to finish before executing the next lines of code. The loop will execute immediately after the first console.log, and the sayHello function will be called after 2 seconds.



// understand the flow of this code
setTimeout(function a() {console.log("a")}, 1000);

setTimeout(function b() {console.log("b")}, 500);

setTimeout(function c() {console.log("c")}, 0);

function d() {
    console.log("d");
}

d();