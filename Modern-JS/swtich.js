let day = 3;
/*
switch(day){
  case 1:
    console.log('MONDAY');
  break;
  case 2:
    console.log('TUESDAY');
  break;
  case 3:
    console.log('WEDNESDAY');
  break;
  case 4:
    console.log('THURSDAY');
  break;
  case 5:
    console.log('FRIDAY');
  break;
  case 6:
    console.log('SATURDAY');
  break;
  case 7:
    console.log('SUNDAY');
  break;
  default:
    console.log("INVALID DAY");
}
*/

let emoji = 'sad face';

switch(emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
}


/*** Ternary Operator ****/

let num = 7;
if(num === 7){
  console.log('lucky!');
} else {
  console.log('bad!');
}


let nums = 7;
nums === 7 ? console.log('lucky!') : console.log('bad!');

let status = 'offline';

/*
let color;
if(status === 'offline'){
  color = 'red';
} else {
  color = 'green';
}
*/

let color = status === 'offline'? 'red' : 'green';