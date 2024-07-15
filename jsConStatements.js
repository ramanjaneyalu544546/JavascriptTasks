//js program to check the number is positive or negative or zero

let number=-22
if(number>0)
    console.log(`${number} is positive`)
else if(number<0)
       console.log(`${number} is negative`)
    else
     console.log(`${number} is zero`)


  //  js program that takes a day of the week as an input 
  let day=6

     switch (day) {
         case 1:
             console.log('Monday');
             break;
         case 2:
             console.log('Tuesday');
             break;
         case 3:
             console.log('Wednesday');
             break;
         case 4:
             console.log('Thursday');
             break;
         case 5:
             console.log('Friday');
             break;
         case 6:
             console.log('Saturday');
             break;
         case 7:
             console.log('Sunday');
             break;
         default:
             console.log('Invalid day number');
             break;
     }


// js program using ternary operator
let age = 21; 
let checkAge= (age >= 18) ? "Adult" : "Minor";
console.log(checkAge);



// js program to print numbers from 1 to 10 using for loop

for (let a= 1; a <= 10; a++) {
    console.log(a);
}


// js program to print numbers from 10 to 1 in reverse order using for loop

for (let b = 10; b >= 1; b--) {
    console.log(b);
}

/* output
-22 is negative
Saturday
Adult
1
2
3
4
5
6
7
8
9
10
10
9
8
7
6
5
4
3
2
1*/
