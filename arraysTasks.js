//performing push and pop funtions on an empty array
let array = [];
array.push(1);
array.push(2);
array.push(3);
array.pop();
console.log(array);

//using shift and unshift functions on array
let array1 = ["a", "b", "c"];
array1.shift();
array1.unshift("z");
console.log(array1);

//using slice function
let array3 = [1, 2, 3, 4, 5];
let newArray = array3.slice(1, 4); 
console.log(newArray);

//using splice function
let colors = ["red", "green", "blue", "yellow"];
colors.splice(2, 1, "purple", "orange");
console.log(colors);

//

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2023
};
console.log(car);

delete car.year;

console.log(car)

//
// Create an object representing a person
let person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "road no.5",
        city: "Hyderabad",
        zipcode: "523222"
    }
};
console.log(person);
console.log(person.address.city);


// Arrow function named greet
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Anji"));

/*output
[ 1, 2 ]
[ 'z', 'b', 'c' ]
[ 2, 3, 4 ]
[ 'red', 'green', 'purple', 'orange', 'yellow' ]    
{ make: 'Toyota', model: 'Camry', year: 2023 }      
{ make: 'Toyota', model: 'Camry' }
{
  name: 'John Doe',
  age: 30,
  address: { street: 'road no.5', city: 'Hyderabad', zipcode: '523222' }
}
Hyderabad
Hello, Anji!*/


