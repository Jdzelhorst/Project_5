import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../styles/SignInUpForm.module.css';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import appStyles from '../../App.module.css'
import axios from "axios";
import { SetCurrentUserContext } from "../../App";

const SignUpForm = () => {
    const setCurrentUser = useContext(SetCurrentUserContext);

    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/registration/", signUpData);
            setCurrentUser(data.user);
            navigate("/sign-in");
        } catch (err) {
            setErrors(err.message);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-0 p-md-2" md={6}>
                <Container className={appStyles.Content}>
                    <h1 className={styles.Header}>Sign up!</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <div class="alert alert-danger" role="alert"key={idx}>
                                {message}
                            </div>
                        ))}
                        <Form.Group className="mb-3" controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password1" value={password1} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
            </Col >
        </Row>
    );
}

export default SignUpForm;