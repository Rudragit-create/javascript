function outer(){
    let count = 0;

    return function inner(){
        count++;
        return count;
    }
}

let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());

/*
In this code, the outer function creates a variable count and returns an inner function that has access to that variable. Each time the inner function is called, it increments the count and returns the updated value. The increment variable holds a reference to the inner function, allowing us to call it multiple times and see the count increase with each call. This demonstrates how closures allow the inner function to retain access to the variables of its outer function even after the outer function has finished executing.
*/

