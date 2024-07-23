let studentData = {
  name:"AnjiReddy",
  age:21,
  number:9009008765,
  email:"anji@gmail.com",
  address:{
      pincode: 541234,
      city:"Hyderabad"
  },
  subjects_opted:['Java', 'DSA', 'OS']
}
//Shallow copy using spread operator
let studentData1 = {...studentData}
studentData1.age = 22        
studentData1.address.city = "Vizag"     
console.log(studentData, studentData1)

//using object.assign method
let studentData2 = {name:"Sanjay", email:"sanjay@gmail.com"}
let updatedData = Object.assign(studentData1, studentData2)
console.log(updatedData, studentData1)


//Deep Copy of objects
let employeeData = {
  name:"Saranya", 
  id:544546,
  employee_details:{
     role:"front-end",
  }
}
let updatedEmployeeData = JSON.parse(JSON.stringify(employeeData))
updatedEmployeeData.employee_details.role = "Full-stack"
console.log(employeeData, updatedEmployeeData)


//Spread in Arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
console.log(arr)


//Spread in objects
let obj1 = {firstName:"Vishnu", age:21}
let obj2 = {lastName:"Anil", number:9494994949}
let obj = {...obj1, ...obj2}
console.log(obj)


//Rest in functions
function sum(...nums){
  let sum = nums.reduce((a, b) =>{return a+b}, 0)
  return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))


//Rest in Destructuring
let subjects=["java", "os", "DSA", "python", "c++"]
let [first, second, ...rest] = subjects
console.log(first, second, rest)


/*output
{
  name: 'AnjiReddy',
  age: 21,
  number: 9009008765,
  email: 'anji@gmail.com',
  address: { pincode: 541234, city: 'Vizag' },
  subjects_opted: [ 'Java', 'DSA', 'OS' ]
} {
  name: 'AnjiReddy',
  age: 22,
  number: 9009008765,
  email: 'anji@gmail.com',
  address: { pincode: 541234, city: 'Vizag' },
  subjects_opted: [ 'Java', 'DSA', 'OS' ]
}
{
  name: 'Sanjay',
  age: 22,
  number: 9009008765,
  email: 'sanjay@gmail.com',
  address: { pincode: 541234, city: 'Vizag' },
  subjects_opted: [ 'Java', 'DSA', 'OS' ]
} {
  name: 'Sanjay',
  age: 22,
  number: 9009008765,
  email: 'sanjay@gmail.com',
  address: { pincode: 541234, city: 'Vizag' },
  subjects_opted: [ 'Java', 'DSA', 'OS' ]
}
{
  name: 'Saranya',
  id: 544546,
  employee_details: { role: 'front-end' }
} {
  name: 'Saranya',
  id: 544546,
  employee_details: { role: 'Full-stack' }
}
[ 1, 2, 3, 4, 5, 6 ]
{ firstName: 'Vishnu', age: 21, lastName: 'Anil', number: 9494994949 }
55
java os [ 'DSA', 'python', 'c++' ]*/