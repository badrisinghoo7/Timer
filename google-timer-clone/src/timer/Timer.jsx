import React, { useState, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const setTimer = (event) => {
    resetTimer();
    const [hours, minutes, seconds] = event.target.value.split(":").map(Number);
    const totalTime = hours * 3600 + minutes * 60 + seconds;
    setTime(totalTime);
  };

  return (
    <div className="timer">
      <h2>Google Timer Clone</h2>
      <div className="timer-display">
        <input
          type="time"
          step="1"
          value={formatTime(time)}
          onChange={setTimer}
        />
      </div>
      <div className="timer-controls">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
