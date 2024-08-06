import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <button
        onClick={handleClick}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 flex items-center justify-center h-50px"
      >
        <span className="text-white mr-2">▲</span>
        <span>Upvote</span>
        <span className="ml-3 bg-white text-red-500 rounded-md px-3 py-1 text-sm">{count}</span>
      </button>
    </div>
  );
};

export default Button;
