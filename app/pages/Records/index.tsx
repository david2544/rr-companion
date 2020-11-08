import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import app from '@utils/firebaseConfig';
import Firebase from 'firebase/app';
import 'firebase/database';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import styles from './styles.module.scss';

interface RecordsProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Records: React.FC<RecordsProps> = props => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [records, setRecords] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      Firebase.database()
        .ref('users')
        .child(currentUser.uid)
        .child('routine')
        .on('value', snapshot => {
          if (snapshot.val()) {
            setRecords([...snapshot.val()]);
            setDataLoaded(true);
          } else {
            setDataLoaded(true);
          }
        });
    }
  }, [currentUser]);

  if (!dataLoaded) return null;

  return (
    <div className={styles.home}>
      <Container>
        <Row>
          <Col md={12} className={styles.boxWrapper}>
            <Col md={12} className={styles.boxHeading}>
              <Link to="/">Track workout</Link>
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

          <Col md={12} className={styles.boxWrapper}>
            <Col md={12} className={styles.box}></Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Records;
