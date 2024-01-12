/*
const square = function(x) {
  return x*x;
}
*/

const  square = (x) => {
  return x*x;
}
/* if there's single argument then no need to use paran
const  square = x => {  
  return x*x;
}
*/

const isEven = (num) => {
  return num % 2 == 0;
}

const multiply = (x,y) => {
  return x*y;
}



/* ******* Implicit Return ****** */

// const  squares = n => (
//    n*n
// )

const squares = n => n * n;

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const dbles = num.map(function (n){
  return n * 2;
})

const dbles2 = nums.map(n => n * 2);

const parityList = numss.map((n) => {
  if(n % 2 === 0) return 'even';
  return 'odd';
})


const parity = numsss.map((n => 
  n % 2 === 0 ?'even': 'odd'
));




/* ****Arrays.find***** */


let movie = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

movies.find(movie => {
  movie.includes('Mrs');
})