import React from 'react';
import { Container, Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import "../style/fonts.css"
function MakeNote(props) {
    const { show } = props
    return (
        <Container style={{ display: show }}>
            <Row><h2 className='maker-title'>Lisa Sissekanne:</h2></Row>
            <Row>
                <Form>
                    <Row>

                        <Col className='mb-3' style={{minWidth:"20vh"}}>
                            <Form.Control type='text' placeholder='Tegija*' />
                        </Col>
                        <Col className='mb-3' style={{minWidth:"20vh"}} >
                            <Form.Select>
                                <option>Vali liik*</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col className='mb-3' style={{minWidth:"20vh"}}>
                            <Form.Select>
                                <option>Vali süsteem*</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <FormGroup className='mb-3 '>

                            <Form.Control type="file" />
                        </FormGroup>
                        <FormGroup className='mb-3'>

                            <Form.Control as="textarea" rows={3} placeholder="Sisu*" />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Button variant='primary'>Lisa</Button>
                        </FormGroup>

                    </Row>
                </Form>
            </Row>
        </Container>
    );
}

export default MakeNote;