function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let x = 10;
    // let movie = "The Shining"

    function extraInner() {
      console.log(movie.toUpperCase())
    }
    // console.log(movie.toUpperCase())
    extraInner();
  }
  inner();
  // console.log(x); 
}