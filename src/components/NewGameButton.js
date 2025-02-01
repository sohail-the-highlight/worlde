import React from 'react';

const NewGameButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      New Game
    </button>
  );
};

export default NewGameButton;