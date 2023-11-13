import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/SignUpForm.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import appStyles from '../../App.module.css'

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-0 p-md-2" md={6}>
                <Container className={appStyles.Content}>
                    <h1 className={styles.Header}>Sign up!</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Col >
        </Row>
    );
}

export default SignUpForm;