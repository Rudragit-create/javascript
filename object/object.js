// object literal:

const jsUser = {
    name:"Rudra",
    age:18,
    location: "agra",
    email:"Rudra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

jsUser.greeting = function(){
    console.log("Hello! " + this.name)
}

console.log(jsUser.greeting());

