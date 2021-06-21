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

function transform(oldPointStructure) {
  let nps = {};
  for (value in oldPointStructure) {
    for (char of oldPointStructure[value]) {
    nps[char.toLowerCase()] = Number(value);
    }
  }
  return nps;
}

let newPointStructure = transform(oldPointStructure);

let word;

function initialPrompt() {
  console.log('Welcome to the Scrabble score calculator!');
  word = input.question('Enter a word to be scored: ');
  return word;
}


function scorerPrompt() {
  console.log('\n0 - Scrabble: The traditional scoring algorithm.\n1 - Simple Score: Each letter is worth 1 point.\n2 - Bonus Vowels: Vowels are worth 3 points, and consonants are 1 point.')
  let userInput = input.question('Which scoring algorithm would you like to use?\nEnter 0, 1, or 2: ');
  console.log(`Score for '${word}': ${scoringAlgorithms[userInput].scoringFunction(word, newPointStructure)}`); 
  
}


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function runProgram() {
  initialPrompt()
  scorerPrompt()
}

let scrabbleScore = {
  name: "Scrabble",
  description: "The tradional scoring algorithm",
  scoringFunction: function(word) {
  	let scoreTotal = 0;
 	  word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      scoreTotal +=  newPointStructure[word[i]]     
	}
  return scoreTotal;
  }
};

let simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: function(word, object) {
    let points = word.length;
    return points;
  }
};

let vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are 3 points, and consonants are 1 point.",
  scoringFunction: function(word, object) {
    let lower = word.toLowerCase();
    let vowelTotal = 0;
    let consTotal = 0;
    let vowels = [ 'a', 'e', 'i', 'o', 'u']
    for (i = 0; i < word.length; i++){
      
      if (vowels.includes(word[i])) {
        vowelTotal += 3;
      
       } else {
        consTotal += 1;
      }
    }
    let points = vowelTotal + consTotal;
    return points;
    } 
};

scoringAlgorithms = [scrabbleScore, simpleScore, vowelBonusScore];

runProgram(scoringAlgorithms);



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