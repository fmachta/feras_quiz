/*

Your job is to make a quiz game in order to test your friends 
on how well they know you. You can ask any questions you like, be as creative as possible.

You need to keep track of a score, depending on each question they get right.

Write an application that will take inputs to each question, and will add 1 to the score if the input from the user is correct. 

Write 10 questions total.
=======================
Checkpoint Requirements:

**- Add sentences for incorrect statements, similar to how you did for correct answer statements
- **Format the sentences when it asks the question to have proper spacing
  - ex: "What is Feras' favorite video game: " (leave space at the end so there is space for user to answer)
- **Add Welcome statement to print in the beginning of the console
  - `Welcome to Feras' quiz game. This is an experiment for friends to be able to see how well they know Feras.
     Please answer all the questions as best as you can. Good luck!`

- Add color to the quiz to make it look neater and separate the question from the answer
  - Make the questions "Yellow", Make the score number "green" if its > 7, "yellow" if its between 3 and 7, and "red" if its less than 3

- **If the user gets it right, add in a ✅, if they get it wrong, add ❌

- At the end of the game, the game should say
  `Thank you for playing! Your score:`

- Make all of the sentences and answers have proper capitalization
==================================================================
Checkpoint requirements (10/12/2021):
 - Create a Figma account
    - Mock up a wireframe of a simple website that will allow users to input an answer to each of your 10 questions
      - You can do this however you want, but I recommend you look at dribbble.io for inspiration (please try to make it a good design)
    - once your wireframe is complete, fully implement the design to make it how you want it to look
    - DESIGN REQUIREMENTS:
      - Must include text for the question
      - Must have an input field to input the answer to the question
      - must have a "submit" button to submit the answer
      - must have a score on the top of the page to show current score
      - each "page" will need to have only one question asked
        - when the user inputs the answer into the textbox, and clicks "submit", if the answer is right, it should add +1 to score, if wrong, -1 to score
      - have text to show your response to the user (whether the answer is right or wrong, show "tesla to the moon baby" or "ur fake bro...")
      - At the end of the quiz, show total score, and a button to play again
      - keep in mind, these requirements may change over time
*/

console.log("\x1b[36m%s\x1b[0m", "Welcome to my quiz!"); //cyan
let score = 0;

const scoreColor = (score) => {
  if(score > 7){
    return "\x1b[32m%s\x1b[0m";
  }
  else if(score <= 7 && score >= 3){
    return "\x1b[33m%s\x1b[0m";
  }
  else {
    return "\x1b[31m%s\x1b[0m";
  }
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is feras' favorite videogame?",
  "What is feras' favorite color?",
  "What is feras' favorite show?",
  "What is feras' favorite company?",
  "What is feras' favorite shoe brand?",
  "What color is feras' backpack?",
  "What is feras' favorite car company?",
  "What is feras' favorite food?",
  "What is feras' favorite fruit?",
  "What is feras' favorite sport?",
];

const answers = [
  "minecraft",
  "green",
  "naruto",
  "apple",
  "vans",
  "pink",
  "tesla",
  "pizza",
  "apple",
  "basketball",
];

const correct = [
  "yes, the holy grail",
  "duh green is legit legendary",
  "NARUTO-KUN",
  "ofc, apple > samsung",
  " gotta wear vans to skate",
  " pink cuz its hot",
  "tesla to the moon baby",
  "pizza, simple eh",
  "apples, even more simple",
  "sheeeeeesh ur good bruh",
];

const incorrect = [
  "wrong :(, ur fake for sure SMH",
  "cmon bro",
  "really...",
  "actually...",
  "it wasnt that hard",
  "bro.. u good?",
  "wrong silly goose",
  "abra cadabra, ur wrong ):",
  " you were so close...",
  " it was the last one ):",
];

// TODO: modify function to modify score
const verifyAnswer = (
  userInput,
  correctAnswer,
  correctResponse,
  incorrectResponse
) => {
  const getScoreColor = scoreColor(score)
  if (userInput === correctAnswer) {
    score++;
    console.log(correctResponse + "✅");
    console.log(getScoreColor, "SCORE: " + score);
    return true;
  } else {
    console.log(incorrectResponse + "❌");
    console.log(getScoreColor, "SCORE: " + score);
    return false;
  }
};

const askUserTheQuestion = (
  question,
  correctAnswer,
  correctResponse,
  incorrectResponse
) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (userInput) => {
      resolve(
        verifyAnswer(
          userInput,
          correctAnswer,
          correctResponse,
          incorrectResponse
        )
      );
    });
  });
};

const main = async () => {
  for (let i = 0; i < questions.length; i++) {
    await askUserTheQuestion(
      questions[i] + "\n",
      answers[i],
      correct[i] + "\n",
      incorrect[i] + "\n"
    );
  }
  console.log(
    "\x1b[36m%s\x1b[0m",
    "thank you for playing!" + "\n" + "your final score is " + score + "/10"
  );
  return
};

main();
