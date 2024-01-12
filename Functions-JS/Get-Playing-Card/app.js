function pick(arr) {
  // return random elements form arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}


function getCard(){
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];

  /*
  const valIdx = Math.floor(Math.random() * values.length);
  // return idx;
  const value = values[valIdx];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const suitIdx = Math.floor(Math.random() * values.length);
  const suit = suits[suitIdx];
  // console.log(value, suit);
  return { value: value, suit: suit};
*/

const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
return {value: pick(values), suit: pick(suits)};

}
