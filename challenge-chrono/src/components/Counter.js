import React, { useState, useEffect } from 'react';

const Counter = ({ increment, maxValue }) => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && count < maxValue) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + increment);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, count, increment, maxValue]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startCounter} disabled={isRunning || count >= maxValue}>
        Start
      </button>
      <button onClick={stopCounter} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
};

export default Counter;
