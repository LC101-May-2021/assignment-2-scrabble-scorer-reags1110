// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

function transform(structure) {
  let newScoreKey = {

  }
  for (item in structure) {
    let func1 = structure[item];
    for (i = 0; i < func1.length; i++) {
      let lower = func1[i].toLowerCase();
    }
  }
  return newScoreKey;
}

function initialPrompt () {
  let userInput = input.question(`Welcome to the Scrabble score calculator!\n\nWhich scoring algorithm would you like to use?\n\n0 - Scrabble: The traditional scoring algorithm.\n1 - Simple Score: Each letter is worth 1 point.\n2 - Bonus Vowels: Vowels are worth 3 points, and consonants are 1 point.\n\nEnter 0, 1, or 2: `);
  
  return userInput;
}


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function runProgram(arrOne) {
  let prompt = initialPrompt ();
  console.log(`\nUsing algorithm: ${scoringAlgorithms[prompt].name}`);
  func1 = '';
  while (func1 !== 'Stop') {
    let userInput = input.question(`Enter a word to be scored, or 'Stop' to quit: `);
    if (userInput === 'Stop') {
    return;
  } else {
    let funcScore = arrOne[prompt].scoreFunction(userInput);
    console.log("Score for" + userInput + ": " + funcScore);
   }
 }
}

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newScoreKey = transform(oldPointStructure);

let scrabbleScore = {
  name: "Scrabble",
  description: "The tradional scoring algorithm",
  scoreFunction: function(word, object) {
    let lower = word.toLowerCase;
    let arrOne = lower.split('');
    let points = 0;
    for (i = 0; i < arrOne.length; i++) {
      let num = newScoreKey[arrOne[i]];
      points += num;
    }
    return points;
  }
};

let simpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: function(word) {
    let points = word.length;
    return points;
  }
};

let bonusVowels = {
  name: "Bonus Vowels",
  description: "Vowels are 3 points, and consonants are 1 point.",
  scoreFunction: function(word) {
    let upper = word.toLowerCase();
    let arrOne = upper.split('');
    let vowelTotal = 0;
    let consTotal = 0;
    for (i = 0; i < arrOne.length; i++){
      if (arrOne[i] === 'a') {
        vowelTotal += 3;
      } else if (arrOne[i] === 'e') {
        vowelTotal += 3;
      } else if (arrOne[i] === 'i') {
        vowelTotal += 3;
      } else if (arrOne[i] === 'o') {
        vowelTotal += 3;
      } else if (arrOne[i] === 'u') {
        vowelTotal += 3;
      
      } else {
        consTotal += 1;
      }
    }
    let points = vowelTotal + consTotal;
    return points;
    } 
};

scoringAlgorithms = [scrabbleScore, simpleScore, bonusVowels];

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

