import React, { useState, useEffect } from 'react';
import './App.css';

function MatchComponent({ match, onSelectionChange, selectedOutcome }) {
  const [localSelectedOutcome, setLocalSelectedOutcome] = useState('');

  useEffect(() => {
    setLocalSelectedOutcome(selectedOutcome || '');
  }, [selectedOutcome]);

  const handleClick = (outcome) => {
    setLocalSelectedOutcome(outcome);
    onSelectionChange(match, outcome);
  };

  const getButtonStyle = (outcome) => {
    return {
      backgroundColor: localSelectedOutcome === outcome ? 'green' : 'initial',
    };
  };

  return (
    <div className="match-container">
      <span className="match-name">{match}</span>
      <div className="match-buttons">
        <button
          onClick={() => handleClick(1)}
          style={getButtonStyle(1)}
        >
          1
        </button>
        <button
          onClick={() => handleClick('x')}
          style={getButtonStyle('x')}
        >
          x
        </button>
        <button
          onClick={() => handleClick(2)}
          style={getButtonStyle(2)}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default MatchComponent;
