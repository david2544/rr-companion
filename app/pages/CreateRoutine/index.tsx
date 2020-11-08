import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import app from '@utils/firebaseConfig';
import Firebase from 'firebase/app';
import 'firebase/database';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import { excerciseOptions } from './excerciseOptions';
import styles from './styles.module.scss';

const formatGroupLabel = data => (
  <div>
    <span>{data.label}</span>
  </div>
);

const saveSelectedOptions = (selectedOptions, currentUser) => {
  if (currentUser) {
    Firebase.database().ref('users').child(currentUser.uid).child('routine').set(selectedOptions);
  }
};

const addNewExcercise = (entries, selectedOptions, setSelectedOptions) =>
  [...Array(entries).keys()].map(index => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{selectedOptions[index] && selectedOptions[index].group}</td>
      <td>
        <Select
          onChange={data => setSelectedOptions({ ...selectedOptions, [index]: data })}
          formatGroupLabel={formatGroupLabel}
          defaultValue={selectedOptions[index]}
          options={excerciseOptions}
        />
      </td>
    </tr>
  ));

interface CreateRoutineProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CreateRoutine: React.FC<CreateRoutineProps> = props => {
  const [excerciseEntries, setExcerciseEntries] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      Firebase.database()
        .ref('users')
        .child(currentUser.uid)
        .child('routine')
        .on('value', snapshot => {
          if (snapshot.val()) {
            setExcerciseEntries(snapshot.val().length);
            setSelectedOptions([...snapshot.val()]);
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
              <Link to="/records">Records</Link>
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
            <Col md={12} className={styles.box}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    <th scope="col">Excercise</th>
                  </tr>
                </thead>
                <tbody>
                  {addNewExcercise(excerciseEntries, selectedOptions, setSelectedOptions)}
                </tbody>
              </table>
              <Col className={styles.buttonWrapper} md={12}>
                <Button
                  onClick={() => saveSelectedOptions(selectedOptions, currentUser)}
                  variant="success"
                >
                  Save
                </Button>
                <div className={styles.editEntriesButtons}>
                  <Button
                    onClick={() => setExcerciseEntries(prevState => prevState + 1)}
                    variant="outline-secondary"
                  >
                    +
                  </Button>
                  <Button
                    disabled={excerciseEntries === 1}
                    onClick={() => setExcerciseEntries(prevState => prevState - 1)}
                    variant="outline-secondary"
                  >
                    -
                  </Button>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateRoutine;
