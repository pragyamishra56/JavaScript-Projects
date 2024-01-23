const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function() {
  //document.body.style.backgroundColor = 'olive';
  // const r = Math.floor(Math.random() * 255);
  // const g = Math.floor(Math.random() * 255);
  // const b = Math.floor(Math.random() * 255);
  // const newColors = `rgb(${r}, ${g}, ${b})`;
  const newColors = makeRandColors();
  document.body.style.backgroundColor = newColors;
  h1.innerText = newColors;
})


const makeRandColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}