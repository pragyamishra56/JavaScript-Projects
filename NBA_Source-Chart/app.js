const warriorsGame = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const ulParent = document.createElement("ul");
for (let game of warriorsGame) {
  const {
    //destructor method used
    homeTeam,
    awayTeam,
  } = game;
  const gameLi = document.createElement("li");
  //console.log(awayTeam.team, homeTeam.team)
  const { 
    team: hTeam, 
    points: hPoints 
  } = homeTeam;
  const { 
    team: aTeam, 
    points: aPoints 
  } = awayTeam;
  const teamNames = `${a.Team} @ ${h.Team}`;
  let scoreLine;
  if(aPoints > hPoints) {
    const scoreLine = `<b>${a.Points}</b>-${h.Points}`;
  } else {
    const scoreLine = `${a.Points}-<b>${h.Points}</b>`;
  }
  gameLi.innerText = `${teamNames} ${scoreLine}`;
  console.log(scoreLine);
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
