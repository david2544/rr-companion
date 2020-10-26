/* eslint-disable no-nested-ternary */
import React from 'react';
import useTimer from '@hooks/useTimer';
import { Button, Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

const formatTime = (timer: number) => {
  const getMiliseconds = `${timer % 10}`.slice(-1);
  const seconds = Math.floor(timer / 10);
  const getSeconds = `0${seconds % 60}`.slice(-2);
  const minutes = Math.floor(seconds / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

  return (
    <Row className={styles.timer}>
      <Col className={styles.timerElements} xs={2}>
        {getHours}
      </Col>
      <Col className={styles.timerElements} xs={2}>
        {getMinutes}
      </Col>
      <Col className={styles.timerElements} xs={2}>
        {getSeconds}
      </Col>
      <Col xs={1}>{getMiliseconds}</Col>
    </Row>
  );
};

const StopWatch = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className={styles.stopWatchWrapper}>
      <div>{formatTime(timer)}</div>
      <div className={styles.buttons}>
        {!isActive && !isPaused ? (
          <Button variant="success" size="lg" onClick={handleStart}>
            Start
          </Button>
        ) : isPaused ? (
          <Button variant="warning" size="lg" onClick={handlePause}>
            Pause
          </Button>
        ) : (
          <Button variant="success" size="lg" onClick={handleResume}>
            Resume
          </Button>
        )}
        <Button size="lg" variant="danger" onClick={handleReset} disabled={!isActive}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
