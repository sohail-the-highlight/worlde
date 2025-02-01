import React, { useState } from 'react';
import Grid from '../components/Grid';
import Keyboard from '../components/Keyboard';
import Message from '../components/Message';
import NewGameButton from '../components/NewGameButton';
import { WORDS } from '../utils/words';

export default function Home() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [targetWord] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);

  const handleKeyPress = (key) => {
    if (gameStatus !== 'playing') return;
  
    if (key === 'ENTER') {
      if (currentGuess.length === 5) {
        if (!WORDS.includes(currentGuess)) {
          alert('Invalid word!');
          return;
        }
  
        const feedback = checkGuess(currentGuess, targetWord);
        setGuesses([...guesses, feedback]);
        setCurrentGuess('');
  
        if (currentGuess === targetWord) {
          setGameStatus('won');
        } else if (attempts === 1) {
          setGameStatus('lost');
        } else {
          setAttempts(attempts - 1);
        }
      }
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Za-z]$/.test(key)) {
      setCurrentGuess(currentGuess + key.toUpperCase());
    }
  };
  

  const checkGuess = (guess, target) => {
    return guess.split('').map((letter, index) => {
      if (letter === target[index]) {
        return { value: letter, color: 'green' };
      } else if (target.includes(letter)) {
        return { value: letter, color: 'yellow' };
      } else {
        return { value: letter, color: 'gray' };
      }
    });
  };

  const startNewGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setAttempts(6);
    setGameStatus('playing');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Wordle Game</h1>

      {/* Display the current word being typed */}
      <div className="mb-4">
        <p className="text-2xl font-bold">Current Word: {currentGuess}</p>
      </div>

      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard onKeyPress={handleKeyPress} />

      {/* Add space between the keyboard and the message/button */}
      <div className="mt-8">
        <Message message={gameStatus === 'won' ? 'You Win!' : gameStatus === 'lost' ? 'You Lose!' : ''} />
        <NewGameButton onClick={startNewGame} />
      </div>
    </div>
  );
}