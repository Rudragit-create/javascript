const person = {
    name: "hitesh",
    greet(){
        console.log(`Hi, I am ${this.name}`); // this will always get the context of hitesh
    },

};

person.greet();


const greetFunction = person.greet; // we are tranferinf the reference to another variable  --> trnsfering from one variable to another.
greetFunction(); // here the context to this is lost. (context is lost)

// binding:

const boundGreet = person.greet.bind({name:"Rudra"});
boundGreet(); // this time knows the context of name

// bind(commonly used),call and apply

