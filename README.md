# worlde
 
Wordle Game
A simple Wordle-like game built with React and Tailwind CSS. The game allows users to guess a 5-letter word within 6 attempts, providing color-coded feedback for each guess.

Table of Contents
Features

How to Play

Installation

Running the Project

Project Structure

Technologies Used

Features
Game Logic:

6 attempts to guess a 5-letter word.

Color-coded feedback for each guess:

Green: Correct letter in the correct position.

Yellow: Correct letter in the wrong position.

Gray: Incorrect letter.

Prevents invalid words from being submitted.

UI/UX:

Grid displaying previous guesses with color-coded feedback.

Message displayed when the user wins or loses.

"New Game" button to restart the game.

State Management:

Maintains guessed words, remaining attempts, and game status.

Performance & Code Quality:

Clean, modular, and readable code.

Proper component structure.

How to Play
Objective:

Guess the hidden 5-letter word within 6 attempts.

Gameplay:

Type a 5-letter word using the on-screen keyboard.

Press ENTER to submit your guess.

After each guess, the grid will display color-coded feedback:

Green: Correct letter in the correct position.

Yellow: Correct letter in the wrong position.

Gray: Incorrect letter.

Use the feedback to refine your next guess.

Winning/Losing:

If you guess the correct word within 6 attempts, you win!

If you fail to guess the word within 6 attempts, you lose.

New Game:

Click the "New Game" button to restart the game.

Installation
To run this project locally, follow these steps:

Clone the Repository:

bash
Copy
git clone https://github.com/your-username/wordle.git
cd wordle-game
Install Dependencies:

bash
Copy
npm install
Running the Project
Start the Development Server:

bash
Copy
npm run dev
Open the Game:

Open your browser and go to http://localhost:3000.

The game should be up and running!

Project Structure
Copy
wordle-game/
├── src/
│   ├── components/
│   │   ├── Grid.js        # Displays the grid of guesses
│   │   ├── Keyboard.js    # Handles key presses
│   │   ├── Message.js     # Displays win/lose messages
│   │   └── NewGameButton.js # Restarts the game
│   ├── pages/
│   │   ├── index.js       # Main game logic and UI
│   ├── styles/
│   │   ├── globals.css    # Global CSS styles
│   ├── utils/
│   │   └── words.js       # Hardcoded list of 5-letter words
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for styling.

Next.js: A React framework for server-side rendering and static site generation.

JavaScript: The programming language used for game logic.

License
This project is open-source and available under the MIT License.

Enjoy playing the game! If you have any questions or feedback, feel free to reach out. 😊

How to Test the Game
Invalid Word Submission:

Type a 5-letter word that is not in the WORDS list (e.g., ABCDE).

Press ENTER.

Expected: An alert saying "Invalid word!" should appear.

Valid Word Submission:

Type a valid 5-letter word from the WORDS list.

Press ENTER.

Expected: The grid should update with color-coded feedback.

Win Condition:

Guess the correct word within 6 attempts.

Expected: A "You Win!" message should appear.

Lose Condition:

Fail to guess the correct word within 6 attempts.

Expected: A "You Lose!" message should appear.

New Game Button:

Click the "New Game" button after winning or losing.

Expected: The game should reset, and you should be able to start a new game.
