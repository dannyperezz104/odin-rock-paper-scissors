# Rock, Paper, Scissors Game

Welcome to the **Rock, Paper, Scissors** game, built with JavaScript! Challenge the computer and see if you can beat it in a classic best-of-5 showdown!

## 🕹️ How to Play

- The game follows standard **Rock, Paper, Scissors** rules:
  - Rock beats Scissors.
  - Scissors beats Paper.
  - Paper beats Rock.
- The first player to win **3 out of 5 rounds** is the champion.

### Gameplay Flow

1. You will be prompted to enter your choice: `"rock"`, `"paper"`, or `"scissors"`.
2. The computer will randomly select its choice.
3. The winner of each round is determined based on the choices:
   - If both choices are the same, it's a tie.
   - Otherwise, the winning choice is determined by the rules mentioned above.
4. After 5 rounds, the final scores are displayed, and the game declares the overall winner.

## 🛠️ Code Overview

This game is implemented using the following main functions:

- **getComputerChoice()**: Randomly selects `"rock"`, `"paper"`, or `"scissors"` for the computer.
- **getHumanChoice()**: Prompts the player to input their choice.
- **playRound()**: Determines the outcome of a single round and updates the scores.
- **playGame()**: Manages the game flow for 5 rounds and announces the final winner.

## 💻 Installation & Running the Game

1. Clone the repository or copy the game code.
2. Open the code in your favorite text editor.
3. Run the game in your browser console:
   - Open your browser (e.g., Chrome).
   - Press `F12` or right-click and select **Inspect**, then go to the **Console** tab.
   - Paste the code into the console and hit **Enter**.

## 🔍 Features

- Simple and interactive console-based game.
- Provides real-time feedback for each round.
- Keeps track of scores and declares the winner at the end.

## 📝 License

This project is open-source and available for anyone to use or modify.