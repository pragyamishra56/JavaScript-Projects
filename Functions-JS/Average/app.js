function avg(arr){
  let total = 0;
  //loop over each num
  for (let num of arr){
    //add them together
    total += num;
  }
  //divide by number of nums
  /*
  let res = total / arr.length;
  return res;
  */
  return total / arr.length;
}