import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface TimerProps {
  onTimeChange: (seconds: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ onTimeChange }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      onTimeChange(seconds); // Timer-Wert an die übergeordnete Komponente übergeben
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeChange, seconds]);

  return (
    <>
      <Typography>Time: {seconds} s</Typography>
    </>
  );
};
