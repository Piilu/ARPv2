
import React, { useState } from 'react';
import { Container, Form, Row, Col, FormGroup, Button, Dropdown, ListGroup, ListGroupItem } from 'react-bootstrap';
import "../style/fonts.css"
function MakeObject(props) {
    const { show,addNewObject,id} = props
    const [klient, setKlient] = useState("");
    const [aadress, setAadress] = useState("");
    const [kontakt, setKontakt] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [susteem, setSusteem] = useState([])
    const selectSystem = async (e) => {
        const susteemid = []
        if (e.target.checked) {
            susteem.forEach(value => {

                susteemid.push(value)
            })
            susteemid.push(e.target.id)
            setSusteem(susteemid)

        }
        else {
            susteem.forEach(value => {

                susteemid.push(value)
            })
            susteemid.splice(susteemid.indexOf(e.target.id), 1)
            setSusteem(susteemid)

        }

    }

    const prepAddObject = () => {
        const andmed = { klient, aadress, kontakt, email, telefon, susteem,id}
        addNewObject(andmed)
    }
    return (
        <Container style={{ display: show }}>
            <Row><h2 className='maker-title'>Lisa Objekt:</h2></Row>
            <Row>
                <Form>
                    <Row>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={klient} onChange={(e) => setKlient(e.target.value)} type='text' placeholder='Klient*' />
                            </Form.Group>
                        </Col>

                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={aadress} onChange={(e) => setAadress(e.target.value)} type='text' placeholder='Aadress*' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={kontakt} onChange={(e) => setKontakt(e.target.value)} type='text' placeholder='Kontakt*' />
                            </Form.Group>
                        </Col>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email*' />
                            </Form.Group>
                        </Col>

                        <Form.Group className='mb-3'>
                            <Form.Control value={telefon} onChange={(e) => setTelefon(e.target.value)} type='text' placeholder='Telefon*' />
                        </Form.Group>
                    </Row>

                    <Dropdown.Divider></Dropdown.Divider>
                    <FormGroup className='mb-3'>

                        <Row><h2 className='maker-title'>Süsteem:</h2></Row>

                    </FormGroup>
                    <FormGroup className='mb-3'>

                    </FormGroup>
                    <FormGroup className='mb-3'>

                        <ListGroup>
                            <ListGroupItem>
                                <Form.Check onClick={selectSystem} id="testing1" label={"testing1"} type='checkbox' />
                                <Form.Check onClick={selectSystem} id="testing2" label={"testing2"} type='checkbox' />
                                <Form.Check onClick={selectSystem} id="testing3" label={"testing3"} type='checkbox' />
                            </ListGroupItem>

                        </ListGroup>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Button onClick={prepAddObject} variant='primary'>Lisa</Button>
                    </FormGroup>




                </Form>
            </Row >
        </Container >
    );
}

export default MakeObject;