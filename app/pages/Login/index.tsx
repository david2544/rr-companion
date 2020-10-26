import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect, useHistory } from 'react-router';
import { Container, Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SigninImage from '@images/signin-image.jpg';

import app from '@utils/firebaseConfig';
import { AuthContext } from '@app/Auth';
import styles from './styles.module.scss';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [alert, setAlert] = useState<string>('');

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        setAlert(error.message);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.background}>
      <Container>
        <Row className={styles.signinBox}>
          <Col md={12}>
            {alert && (
              <Alert onClose={() => setAlert('')} dismissible variant="danger">
                {alert}
              </Alert>
            )}
          </Col>
          <Col md={6} className={styles.signinImage}>
            <img alt="signin" src={SigninImage} />
            <Link className={styles.alreadyMemeberLink} to="/signup">
              Create an account
            </Link>
          </Col>
          <Col md={6} className={styles.signinForm}>
            <Col md={9} className="no-padding">
              <h1 className={styles.heading}>Sign In</h1>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    type="password"
                    isValid={password !== '' && password.length > 5}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" className={styles.button}>
                  Log in
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
