import React from 'react';

const Grid = ({ guesses }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {guess.map((letter, colIndex) => (
            <div
              key={colIndex}
              className={`w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 ${
                letter.color === 'green'
                  ? 'bg-green-500'
                  : letter.color === 'yellow'
                  ? 'bg-yellow-500'
                  : 'bg-gray-500'
              }`}
            >
              {letter.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;