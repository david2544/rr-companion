import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import useBreakCounter from '@hooks/useBreakCounter';
import styles from './styles.module.scss';

const BreakCounter: React.FC = () => {
  const [breakTime, setBreakTime] = useState(90);
  const { counter, isActive, handleStart, handleReset } = useBreakCounter(breakTime);

  return (
    <Col className="text-center" md={12}>
      <Col md={{ span: 12 }} className={styles.changeBreakTimeButtonWrapper}>
        <Button variant="light" onClick={() => setBreakTime(prevState => prevState + 15)}>
          +15 seconds
        </Button>
        <Button variant="light" onClick={() => setBreakTime(prevState => prevState - 15)}>
          -15 seconds
        </Button>
      </Col>
      <Col md={12}>
        <div className={styles.counter}>{counter}</div>
        {isActive ? (
          <Button size="lg" variant="light" onClick={handleReset}>
            Reset
          </Button>
        ) : (
          <Button variant="success" size="lg" onClick={handleStart}>
            Start
          </Button>
        )}
      </Col>
    </Col>
  );
};

export default BreakCounter;
