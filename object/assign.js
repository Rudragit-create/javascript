const obj1 = {1:"A",2:"B",3:"C"};
const obj2 = {3:"D",4:"E"};

const obj3 = Object.assign(obj1,obj2);

console.log(obj1);
console.log(obj3);

console.log(obj1 === obj3);