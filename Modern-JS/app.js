if (1 !== 1) {
  console.log("It's True!");
}


let rating = 3;
if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!');
}

let num = 37;
if (num % 2 !== 0) {
  console.log('ODD NUMBER!');
}

let ratin = 1;
 if (ratin == 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (ratin === 1) {
  console.log('NEEDS IMPROVEMENT');
}




//Example of else if else
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
}
else {
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}