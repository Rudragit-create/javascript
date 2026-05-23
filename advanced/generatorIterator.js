function* numberGenerator(){ // this is a generator function
    yield 1
    yield 2
    yield 3 

    
}

let gen = numberGenerator()

console.log(numberGenerator);
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)