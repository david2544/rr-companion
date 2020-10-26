import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StopWatch from '@app/common/StopWatch';
import app from '@utils/firebaseConfig';
import { Link } from 'react-router-dom';
import BreakCounter from './BreakCounter';
import WorkoutTracker from './WorkoutTracker';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Container>
      <Row>
        <Col md={12} className={styles.boxWrapper}>
          <Col md={12} className={styles.boxHeading}>
            <Link to="/create-routine">Create/Update routine</Link>
            <Button
              className={styles.signoutButton}
              variant="light"
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </Button>
          </Col>
        </Col>
        <Col md={4} className={styles.boxWrapper}>
          <Col md={12} className={styles.box}>
            <BreakCounter />
          </Col>
        </Col>
        <Col md={8} className={styles.boxWrapper}>
          <Col md={12} className={styles.box}>
            <StopWatch />
          </Col>
        </Col>
        <Col md={12} className={styles.boxWrapper}>
          <Col md={12} className={styles.box}>
            <WorkoutTracker />
          </Col>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
