/*
function add(x,y){
  return x + y;
}

const sum = function add(x,y){
  return x + y;
}

const product = function(x,y) {
  return x * y;
}

*/

/* ***** Higher-Order-Function ******* */

/*
function add(x,y) {
  return x + y;
}

const subtract = function add(x,y) {
  return x - y;
}

const multiply = function add(x,y) {
  return x * y;
}

const divide = function add(x,y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

for(let func of operations) {
  let result = func(30,5);
  console.log(result);
}

const thing = {
  doSomething: multiply
}
*/



/* ****** Function-As-Arguments ******* */

function callThreeTimes(f) {
  f();
  f();
  f();
} 

function cry() {
  console.log("ughhhh unhhaaaa hooo I'M SO SAD!");
}

function rage() {
  console.log("I HATE SOFFFF!!");
}


function repeatNTimes(action, num){
  for(let i=0; i< num; i++){
    action();
  }
}

// repeatNTimes(rage, 13);


function pickOne(f1, f2){
  let rand = Math.random();
  console.log(rand);
  if(rand < 0.5){
    f1();
  } else {
    f2();
  }
}


/* *******Functions-As-Return-Values******* */

function multiplyBy(num){
  // const f = function(){
  // console.log("BLAHHHH");

  // }
  /*
  return function() {
    console.log("HIII");
  }
  */

  return function(x) {
    return x * num;
  }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);



function makeBetweenFunc(x,y){
  return function (num) {
    return num >= x && num <= y;
  }
}
makeBetweenFunc(0,18);

// const isChild = function(num) {
//   return num >= 0 && num <= 18;
// }
//  isChild(17); //true

 const isChild  = makeBetweenFunc(0, 18);

 const isInNineties = makeBetweenFunc(1990, 1999);

 const isNiceWeather = makeBetweenFunc(60, 79);




 /* ****** CallBacks ****** */


 /*
 function callTwice(func) {
  func();
  func();
 }

 function laugh() {
  console.log("HAHHHAHAHHAHAHAHAHAHAH");
 }
 //callTwice(laugh); //pass a function as an arg!

*/


/*
 function grumps(){
  alert("Heyyyyy Go AWAYYY!!!");
 }
setTimeout(grumps, 5000);
*/

/*
setTimeout(function () {
  alert("WELCOME!");
}, 5000);
*/

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  alert("WHY DID YOU CLICK ME!!??");
})



/* ******** HOISTING ********** */

/*
var animal;
console.log(animal);
var animal = 'Tapir';
console.log(animal);
*/


/*
console.log(shrimp);
let shrimp = 'Harlequin Shrimp';
*/


/*
howl();

function howl(){
  console.log("AWOOOOOOOOO");
}
*/


hoot(); //error
var hoot = function() {
  console.log("HOOO HOOOO");
}
// hoot(); 