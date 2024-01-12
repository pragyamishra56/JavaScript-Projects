// function isPangrams(sentence){
//   for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//     if(sentence.indexOf(char) === -1){
//       return false;
//     }
//   }
//   return true;
// }



// function isPangrams(sentence){
//   let lowerCased = sentence.toLowerCase();
//   for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//     if(lowerCased.indexOf(char) === -1){
//       return false;
//     }
//   }
//   return true;
// }


function isPangrams(sentence){
  let lowerCased = sentence.toLowerCase();
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(!lowerCased.indexOf(char)){
      return false;
    }
  }
  return true;
}