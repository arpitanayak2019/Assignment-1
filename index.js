
//Q.1) A school has following grading rule:
// 1.below 10 and 10 ,E
// 2.11-20-D
// 3.21-30-C
// 4.31-40-B
// 5.41-50-A
// ask user to enter marks out of 50 and print the grades using switch statement.
//solution
// let marks = prompt("enter your number");
// switch (true) {

//     case(marks >= 1 && marks <= 10):
//      console.log("your grade is E");
//     break;
    
//     case (marks >= 11 && marks <= 20):
//      console.log("your grade is D");
//     break;

//     case (marks >= 21 && marks<= 30 ):
//      console.log("your grade is C");
//     break;

//     case (marks >= 31 && marks <= 40):
//      console.log("your grade is B");
//     break;

//     case (marks >= 41 && marks <= 50):
//      console.log("your grade is A");
//     break;
//      default:  console.log("invalid value");
// }


       
//Q.1)Add two Numbers by function AddTwoNumbers which return the result after adding numbers.
// function AddTwoNumbers() {
// let A = 5;
// let B = 2;
// const sum = A + B;
// console.log(sum);
    
// }
// AddTwoNumbers();

//OR

// function AddNumbers(x,y) {
//     s = x + y;
//     return s ;
    
// }
// let Val = AddNumbers(5,2);
// console.log(Val);

//Q.2)Find  if the conditions are obeyed or not?
// function Is_Valid(A,B){
//     if (A < 10 && A > B) {
//         console.log(true);
        
        
//     } else { console.log(false);
    
        
//     }
//  } 
//  Is_Valid ( 5, 3);
 
//Q.3)check the conditions

// function check(A,B){
    
//     if (A % 10 ==0 ||  B % 10 == 0) {
//         console.log("true");

//   } else {
//      console.log ("false");
      
    
        
//     }
// }
// check(12,20);
//Q.4)First Digit of 4 digit number

// function First_Digit() {
//     let N = "4567";
//   console.log(N[0]);
    
// }
// First_Digit();

//Q.5) Last digit of 4 digit Number
// function Last_Digit() {
//   let N = "4567";
//   console.log(N[3]);
  
// }
// Last_Digit();

//Q.6)Remainder
// function Find_the_remainder(A,B){
//   Rem = B % A;
//   console.log(Rem);
  

// }
// Find_the_remainder(2,9);

//Q.7)Multiply two Numbers
// function Multiply_two_number(A,B) {
//    Mul = A * B;
//   console.log(Mul);
//   }

//   Multiply_two_number(2,5);

//Q.7)Multiply two Numbers

// function Multiply_two_number(A,B) {
//     s = A * B;
//     return s;
    
// }
//  let value = Multiply_two_number(2,5);
//  console.log(value);

 //Q.8)Marks calculator

//  function sum(A, B , C) {
//      s = A + B + C;
//      return s;

// }
// let total = sum(50,20,100);
// console.log(total);

//calculate Average

function Average(A, B , C) {
    A= (A + B + C)/3;
    return A;

}
let Avg = Average(50,20,100);
console.log(Avg);

