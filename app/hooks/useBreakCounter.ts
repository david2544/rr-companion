import { useEffect, useState, useRef } from 'react';
import useSound from 'use-sound';
import beep from '../../assets/audio/beep.wav';

const useBreakCounter = initialState => {
  const [counter, setCounter] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef<any>();
  useEffect(() => {
    setCounter(initialState);
  }, [initialState]);

  const [playActive] = useSound(beep, { volume: 0.5 });

  if (counter <= 0) {
    clearInterval(countRef.current);
    setIsActive(false);
    setCounter(initialState);
  }

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setCounter(i => {
        if (i <= 3 || i === 11) {
          playActive();
        }
        return i - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setCounter(initialState);
  };

  return {
    counter,
    isActive,
    handleStart,
    handleReset,
    playActive,
  };
};

export default useBreakCounter;
