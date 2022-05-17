import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "../../style/align.css"
import "../../style/form_items.css"
import "../../style/fonts.css"

function Register(props) {
    return (
        <Container  className='center'>
        <div className='container-custom'>

            <Form>
                <Form.Group className="mb-3" controlId="title.ControlInput1">
                    <h2 className='form-title'>Register</h2>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Marko kuusk"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password.ControlInput1">
                    <Button  variant='success'>Register</Button>
                </Form.Group>

            </Form>
        </div>
    </Container>
    );
}

export default Register;