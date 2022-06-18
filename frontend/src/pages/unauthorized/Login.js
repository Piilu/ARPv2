import React,{useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "../../style/align.css"
import "../../style/form_items.css"
import "../../style/fonts.css"
import axios from 'axios';
axios.defaults.withCredentials = true

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const login = async()=>{
        const user = {
            email,
            password
        }
        await axios.post("http://localhost:3001/api/auth/signin",user).then(res=>{
            if(res.status==200){
                alert("Sisselogitud "+res.data.username);
                window.location.reload();
            }
        }).catch(err=>{
            alert(err.response.data.message);
        })
    }
    return (
        <Container className='center' >
            <div className='container-custom'>

                <Form>
                    <Form.Group className="mb-3" controlId="title.ControlInput1">
                        <h2 className='form-title'>Login</h2>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="********" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password.ControlInput1">
                        <Button onClick={login}  variant='success'>Login</Button>
                    </Form.Group>
                    <Button href='/register' variant='light'>Loo uus kasutaja</Button>

                </Form>
            </div>
        </Container>
    );
}

export default Login;