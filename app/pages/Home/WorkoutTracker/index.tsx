import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

interface WorkoutTrackerProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WorkoutTracker: React.FC<WorkoutTrackerProps> = props => (
  <Row>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Excercise name</th>
          <th scope="col">Previous</th>
          <th scope="col">1st</th>
          <th scope="col">2nd</th>
          <th scope="col">3rd</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </Row>
);

export default WorkoutTracker;
