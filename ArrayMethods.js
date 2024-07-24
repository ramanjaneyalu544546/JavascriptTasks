//printing each number in an array using forEach method
let array=[1,2,3,4,5]
let print=array.forEach((itr)=>{
    console.log(itr)
})

//using map method to create new array
let array1=[1,2,3,4,5,6,7,8,9]
let doubled_array=array1.map((itrtr)=>{
    return itrtr*2
    
})
console.log(doubled_array)

//
// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); 

//using reduce finding sum of elements in an array
let array3=[1,2,3,4,5]
let sum=array3.reduce((acc,iter)=>{
    return acc=acc+iter
},0)
console.log(sum)

//using find method
let person=[
    {
        name:"Anji",
        age:21
    },
    {
        name:"Sanjay",
        age:26
    },
    {
        name:"Deva",
        age:26
    }
]
let personName=person.find((persons)=>persons.age>25)
console.log(personName.name)

//using findIndex method
let people=[
    {
        name:"Pavani",
        age:22
    },
    {
        name:"Seema",
        age:17
    },
]
let findindex=people.findIndex((peoples)=>peoples.age<18)
console.log(findindex)

/*output
1..
1
2
3
4
5

2..
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18
]
3..
[ 2, 4, 6, 8, 10 ]
4..
15
5..
Sanjay
6..
1
*/