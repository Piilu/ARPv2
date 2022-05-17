import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "../../style/align.css"
import "../../style/form_items.css"
import "../../style/fonts.css"


function Login(props) {
    return (
        <Container fluid={true} className='center'>
            <div className='container-custom'>

                <Form>
                    <Form.Group className="mb-3" controlId="title.ControlInput1">
                        <h2 className='form-title'>Login</h2>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password.ControlInput1">
                        <Button  variant='success'>Login</Button>
                    </Form.Group>
                    <Button href='/register' variant='light'>Loo uus kasutaja</Button>

                </Form>
            </div>
        </Container>
    );
}

export default Login;