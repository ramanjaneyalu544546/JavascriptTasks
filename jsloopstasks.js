//for loop
//js program to print 5 table
let n=5
for(let i=1;i<=10;i++){
    console.log(n+'*'+i+'='+i*n)
}

//js program to find sum of even numbers between 1 to 50
let sum=0
for(let i=1;i<=50;i++){
    if(i%2==0){
        sum+=i
     }
    }
 console.log(sum)

 //while loop
 //js program to print prime numbers from 2 to 20 using while loop
 let i=2
 while(i<=20){
    let flag=0
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1
            break
         }
     }
     if(flag==0)
        console.log(i)
 i++
 }

 //js program to print sum of all odd numbers between 1and 20 using while loop
 let oddsum=0
 let j=1
 while(j<=20){
    if(j%2!=0){
        oddsum+=i
     }
     j++
 }
 console.log(oddsum)

 //js to program to calculate the factorial of number using while loop
 let num=5
 let fact=1
 while(num>0){
    fact*=num
    num--
}
console.log(fact)

/*5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
650
2
3
5
7
11
13
17
19
210
120*/
