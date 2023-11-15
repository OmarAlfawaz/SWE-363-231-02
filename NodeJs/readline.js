const readline = require('readline');

// Define a set of questions and answers
const questionsAndAnswers = [
  {
    question: "What is your name?",
    answer: "My name is Omar.",
  },
  {
    question: "Where are you from?",
    answer: "I'm a chatbot, i don't exists.",
  },
  {
    question: "What is your favorite number?",
    answer: "8",
  },
  {
    question: "What is your favorite animal?",
    answer: "My favorite animal is a cat.",
  },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const greetingMessage = "Hello there! how can I help you today?";

console.log(greetingMessage);

rl.on('line', (userInput) => {
  // Check if the user wants to exit
  if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
    console.log("Goodbye! It was nice talking to you.");
    rl.close();
    return;
  }

 
  let foundAnswer = false;
  for (const questionAndAnswer of questionsAndAnswers) {
    if (userInput.toLowerCase().includes(questionAndAnswer.question.toLowerCase())) {
      console.log(questionAndAnswer.answer);
      foundAnswer = true;
      break;
    }
  }

  // If no matching question found
  if (!foundAnswer) {
    console.log("I'm sorry, I didn't understand your question.");
  }
});