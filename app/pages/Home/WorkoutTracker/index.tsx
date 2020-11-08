import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import Firebase from 'firebase/app';
import { AuthContext } from '../../../Auth';
import 'firebase/database';
import styles from './styles.module.scss';

interface WorkoutTrackerProps {}

const renderExcercises = (setWorkoutData, workoutData) =>
  workoutData.map((excercise, index) => (
    <tr key={excercise.value}>
      <th>{index + 1}</th>
      <td>{excercise && excercise.label}</td>
      {[1, 2, 3].map(i => (
        <td key={i}>
          <input
            onChange={e => {
              const { value } = e.target;
              const updatedWorkoutData = workoutData;
              updatedWorkoutData[index].reps[i] = value;

              setWorkoutData([...updatedWorkoutData]);
            }}
            type="number"
            placeholder="0"
          />
        </td>
      ))}
      <td>
        <input
          onChange={e => {
            const { value } = e.target;
            const updatedWorkoutData = workoutData;
            updatedWorkoutData[index].notes = value;

            setWorkoutData([...updatedWorkoutData]);
          }}
          type="text"
        />
      </td>
    </tr>
  ));

const recordRoutine = (currentUser, workoutData) => {
  if (currentUser) {
    Firebase.database().ref('users').child(currentUser.uid).child('records').set(workoutData);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WorkoutTracker: React.FC<WorkoutTrackerProps> = props => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [workoutData, setWorkoutData] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    Firebase.database()
      .ref('users')
      .child(currentUser.uid)
      .child('routine')
      .on('value', snapshot => {
        snapshot.val();
        setWorkoutData(
          snapshot.val().map(excercise => ({
            ...excercise,
            reps: {},
            notes: '',
            date: Date.now(),
          })),
        );
        setDataLoaded(true);
      });
  }, [currentUser]);

  if (!dataLoaded) return null;

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Excercise Name</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{renderExcercises(setWorkoutData, workoutData)}</tbody>
      </Table>
      <Button onClick={() => recordRoutine(currentUser, workoutData)} variant="primary">
        Save
      </Button>
    </div>
  );
};

export default WorkoutTracker;
