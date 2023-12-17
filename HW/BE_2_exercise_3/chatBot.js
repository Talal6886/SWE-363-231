const readline = require('readline');

// Predefined questions and answers
const questions = {
  "hi": "Hello! How can I help you today?",
  "how are you": "I'm doing well, thanks for asking. How are you?",
  "what can you do": "I can answer your questions and provide information.",
  "what is your name": "I am Bard, a simple chatbot.",
  "exit": "Goodbye!"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("> ", (userInput) => {
    const userQuestion = userInput.toLowerCase();
    const answer = questions[userQuestion];

    if (answer) {
      console.log(answer);
    } else {
      console.log("I don't understand your question. Please try again.");
    }

    if (userQuestion === "exit" || userQuestion === "quit") {
      rl.close();
    } else {
      askQuestion();
    }
  });
}

console.log("Welcome to the chat! Type 'exit' or 'quit' to leave.");
askQuestion();
