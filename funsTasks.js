//function without parameters
function greet(){
    console.log("Hello, World!")
}
greet()

//function with parameters
function addNumbers(a, b){
    console.log("sum",a+b)
}
addNumbers(10, 20)

//function with Return Statements
function multiply(x, y){
    return x*y
}
let result=multiply(10, 20)
console.log("multiply",result)

//Combining Functions
function calculateRectangleArea(length, width){
    return multiply(length, width)
    
}
let area=calculateRectangleArea(20, 30)
console.log("area",area)

//Default Parameters
function greetUser(name = "Guest") {
     console.log(`Hello, ${name}!`);
}
greetUser(); 
greetUser("Anji"); 

/*Output
Hello, World!
sum 30
multiply 200
area 600
Hello, Guest!
Hello, Anji!*/
