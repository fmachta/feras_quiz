/*

Your job is to make a quiz game in order to test your friends 
on how well they know you. You can ask any questions you like, be as creative as possible.

You need to keep track of a score, depending on each question they get right.

Write an application that will take inputs to each question, and will add 1 to the score if the input from the user is correct. 

Write 10 questions total.

*/
let score = 0;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const questions = [
  "what is feras' favorite videogame? ",
  "what is feras' favorite color?",
  "what is feras' favorite show?",
  "what is feras' favorite company?",
  "what is feras' favorite shoe brand?",
  "what color is feras' backpack?",
  "what is feras' favorite car company?",
  "what is feras' favorite food?",
  "what is feras' favorite fruit?",
  "what is feras' favorite sport?",
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

const incorrect = ["wrong :(, ur fake for sure SMH"];

// TODO: modify function to modify score
const verifyAnswer = (
  userInput,
  correctAnswer,
  correctResponse,
  incorrectResponse
) => {
  if (userInput == correctAnswer) {
    score++
    console.log(correctResponse);
    console.log("SCORE: " + score);
    return true;
  } else {
    console.log(incorrectResponse);
    console.log("SCORE: "+ score)
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
      questions[i],
      answers[i],
      correct[i],
      incorrect[0]
    );
  }
};

main();
