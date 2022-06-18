import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "../../style/align.css"
import "../../style/form_items.css"
import "../../style/fonts.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true

function Register(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate("");
    const register = async()=>{
        const user = {
            username,
            email,
            password
        } 
        await axios.post("http://localhost:3001/api/auth/signup",user).then(res=>{
            if(res.status==200){
                alert("Kasutaja loodud edukalt");
                navigate("/");
            }

        }).catch(err=>{
            alert("Kasutaja on juba olemas")
        })
    }
    return (
        <Container  className='center'>
        <div className='container-custom'>

            <Form>
                <Form.Group className="mb-3" controlId="title.ControlInput1">
                    <h2 className='form-title'>Register</h2>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Marko kuusk"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="********" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password.ControlInput2">
                    <Button onClick={register}  variant='success'>Register</Button>
                </Form.Group>

            </Form>
        </div>
    </Container>
    );
}

export default Register;