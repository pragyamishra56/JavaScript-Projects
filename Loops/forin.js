const tvs = {
  regularPlay : 255767,
  watsonChallenge : 300000,
  tournamentOfChampions : 500000,
  battelOfTheDecades : 100000,
};

for (let prop in tvs) {
  console.log(prop);
  console.log(tvs[prop]);
}

let total = 0;
for (let prop in tvs) {
  total += tvs[prop];
}

console.log(`Kaiju's Total Earning ${total}`);

for(let k in [ 88, 99, 66, 44 ]){
  console.log(k);
}