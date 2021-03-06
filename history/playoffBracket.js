/*

Example Question: 

Generate an array of playoff seeding. 

*/

/**
 * @param {number} numberOfPlayers
 * @return {number[array]}
 */

const generatePlayoff = (numberOfPlayers) => {
  
  let playoffSeeding = [1,2];
  let numberOfRounds = Math.log(numberOfPlayers) / Math.log(2) -1;
  if(numberOfRounds%1 !== 0 || numberOfPlayers === 1) return false;

  const nextRound = (seedArr) => {
    let output = [];
    let length = seedArr.length*2+1;
    //Example: semi finals = 1 vs (length - 1) ==> 5-1 === 4.
    //                       2 vs (length - 2) ==> 5-2 === 3.
    seedArr.forEach((team)=>{
      output.push(team);
      output.push(length-team);
    });
    return output;
  }

  for(let i = 0; i < numberOfRounds; i++){
    playoffSeeding = nextRound(playoffSeeding)
  };

  return playoffSeeding;
 };

 console.log(generatePlayoff(16));

 // Alternate solution

 const playoffGenerate = (teams) => {
  let solution = [];
  let finals = [1,2];
  
  const rounds = (matchup,round) => {
    let tempRound = [];
    round.forEach((team)=>{
      tempRound.push(team);
      tempRound.push(matchup+1-team);
    });

    if(matchup === teams){
      solution = tempRound
      return
    }
    rounds(matchup*2, tempRound);
  }
  rounds(finals.length*2,finals);
  return solution;
}

console.log(playoffGenerate(16));
