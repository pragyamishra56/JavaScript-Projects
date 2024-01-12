function isValidPassword(password, username) {
  /*
  // 1st Method

  if(password.length < 8){
    return false;
  }
  if(password.indexOf(' ') !== -1){
    return false;
  }
  if(password.indexOf(username) !== -1){
    return false;
  }
  return true;
  */


  /*
  // 2nd Method

  if(
    password.length < 8 || 
    password.indexOf(' ') !== -1 || 
    password.indexOf(username) !== -1) {
      return false;
  }
  return true;
  */

/*
  // 3rd Method

    const tooShort = password.length < 8;
    const noSpace = password.indexOf(' ') !== -1; 
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || noSpace || tooSimilar) return false;
  return true;
*/


/*
// 4th Method
const tooShort = password.length < 8;
    const noSpace = password.indexOf(' ') !== -1; 
    const tooSimilar = password.indexOf(username) !== -1;
    if (!tooShort && !noSpace && !tooSimilar) return true;
  return false;
*/


// 5th Method

const tooShort = password.length < 8;
    const noSpace = password.indexOf(' ') !== -1; 
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !noSpace && !tooSimilar;
}