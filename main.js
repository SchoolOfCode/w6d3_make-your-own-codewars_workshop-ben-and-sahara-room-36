/* 
👉 Write your kata here!*/ 
/*Write a function that takes in a number as a parameter and it returns true if it is a prime number or false if it is not a prime number.

Prime numbers are special numbers, greater than 1, that have exactly two factors, themselves and 1.

For example 
1 ----> false
2 ----> true
4 ----> false
7 ----> true
-2 ----> false




*/

//👉 Write the function your CodeWarriors will start with below here:
// function isPrime(number){
//     //write your code here
// }



/* Plan
// Write a function that takes in a number as a parameter and it returns true if it is a prime number or false if it is not a prime number.

*/


function isPrime(number) {
          for(let i = 2; i < number; i++)
            if(number % i === 0) return false;
          return number > 1;
        
  }
