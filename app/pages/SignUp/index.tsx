import React, { useCallback, useState } from 'react';
import { useHistory, withRouter } from 'react-router';
import app from '@utils/firebaseConfig';
import SignupImage from '@images/signup-image.jpg';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  const isInvalidPass = password.length < 6 && password !== '';
  const isInvalidConfPass = password !== confirmPassword && password !== '';

  return (
    <div className={styles.background}>
      <Container>
        <Row className={styles.signupBox}>
          <Col md={8} className={styles.signupForm}>
            <Col md={9} className="no-padding">
              <h1 className={styles.heading}>Sign up</h1>
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
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
                  <Form.Text className="text-muted">
                    Your password must be at least 6 characters long
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Repeat your password</Form.Label>
                  <Form.Control
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                    type="password"
                    isValid={password === confirmPassword && password !== '' && password.length > 5}
                    isInvalid={isInvalidConfPass}
                  />
                </Form.Group>
                <Button
                  disabled={isInvalidPass}
                  variant="primary"
                  type="submit"
                  size="lg"
                  className={styles.button}
                >
                  Register
                </Button>
              </Form>
            </Col>
          </Col>
          <Col md={4} className={styles.signupImage}>
            <img alt="signup" src={SignupImage} />
            <Link className={styles.alreadyMemeberLink} to="/login">
              I am already a member
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
