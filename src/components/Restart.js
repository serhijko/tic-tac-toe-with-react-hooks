import React from 'react';

function Restart({ onClick }) {
  
  return (
    <button className="restart" onClick={onClick}>
      Play again
    </button>
  );
}

export default Restart;
