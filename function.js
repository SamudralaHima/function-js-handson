//DAy-1
// question-1
// Create one function with zero parameter having a console statement
function displaytitle(){
    console.log("function handson");
}
displaytitle();

//question-2
// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function addition(x,y){
    let sum=x+y;
    console.log("sum of"+x+","+y+" is" +sum);
}
addition(3,4);

// question-3
//Create one arrow function
let arrowFunc=(a,b)=>a*b;
console.log(arrowFunc(23,26));
//question-4
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
// within the function scope x gets hoisted and since it is of var type, we get the output as undefined

//question 5
var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}
// Due to hoisting of the variable within the function scope, first we get the output as undefined. x has been initialized as 21 already and that is printed when console.log(x) is executed

//question 6
var x = 21;
a();
b();
function a() {
  x = 20;
  console.log(x);
}
function b() {
  x = 40;
  console.log(x);
}

console.log(x);
// value of x is initialized as 20 within the function scope of a() and output is 20. value of x is initialized as 40 within the function scope of b(), so the output is 40.

//question 7
//Write a function that accepts parameter n and returns factorial of n
// using while loop
function factorial(x){
    let ans=1;
    while(x>0){
        ans=ans*x;
        x--;
    }
    console.log(ans);
}
factorial(5);
//using for loop
function facto(x){
    let factorial=1;
    for(let i=x; i>0; i--){
        factorial*=i;
    }
    console.log(factorial);
}
facto(6);
// day 2
//question 1
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

//question 2
// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

// question 3
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//question 4

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")