// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function scrabbleScore(word) {
	word = word.toLowerCase();
	let letterPoints = "";
  let score = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in newPointStructure) { 
      if (pointValue === word[i]) {
      letterPoints += `Points for '${word[i]}': ${newPointStructure[pointValue]}\n`;
      score = score + Number(newPointStructure[pointValue]);
      }
    }
  }
  console.log(`${letterPoints}Score for '${word}': ${score}`);
	return score;
 }

function simpleScore(word) {
  word = word.toLowerCase();
	let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {
    letterPoints = letterPoints + 1;
    console.log(`Points for '${word[i]}': 1`);
  }
  console.log(`Score for '${word}': ${letterPoints}`);
  return letterPoints;
}

function vowelBonusScore(word) {
  word = word.toLowerCase();
	let letterPoints = 0;
  const testObj = {
    3: ['a','e','i','o','u','y']
  }

  for (let i = 0; i < word.length; i++) {

    for (const letter in testObj){

      if(testObj[letter].includes(word[i])) {
        letterPoints = letterPoints + 3;
        console.log(`Points for '${word[i]}': ${letter}`);
      } else {
        letterPoints = letterPoints + 1;
        console.log(`Points for '${word[i]}': 1`);
      }
      
    }
  }
  console.log(`Score for ${word}: ${letterPoints}`);
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
  let userInput = input.question("Please enter a word to score: ").toLowerCase().trim();
  let checker = 0;

  while(checker !== userInput.length){
    checker = 0;
    for(let i = 0 ; i < userInput.length; i++) {
      for(key in newPointStructure) {
        if (userInput[i] === key) {
          checker++;
        }
      }
    }
    if(checker !== userInput.length){
     userInput = input.question("Invalid chracters entered! Please enter a word to score: ").toLowerCase().trim();
      
    }
  }

   return userInput;
}

let simpleScore1 = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoringFunction: simpleScore
}

let vowelBonusScore1 = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoringFunction: vowelBonusScore
};

let scrabbleScore1 = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore
};

const scoringAlgorithms = [simpleScore1,vowelBonusScore1,scrabbleScore1];

function scorerPrompt() {  
  let scoringChoice = input.question(`Which scoring algorithm would you like to use?.\n 
    0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n
    1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n
    2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n
    Enter 0, 1, or 2: `);

  return scoringAlgorithms[Number(scoringChoice)];
}

function transform(object) {
  let newKey = "";
  let newPoints = {}
  for (const key in object) {
      for(let i = 0; i < object[key].length; i++) {
      newKey = object[key][i].toLowerCase();
      newPoints[newKey] = Number(key);
      }
  }
  return newPoints;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
let wordToScore = initialPrompt();
scorerPrompt().scoringFunction(wordToScore);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
