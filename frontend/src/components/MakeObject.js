
import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Row, Col, FormGroup, Button, Dropdown, ListGroup, ListGroupItem } from 'react-bootstrap';
import "../style/fonts.css"
function MakeObject(props) {
    const { show, allObjects, setAllObjects } = props
    const [Klient, setKlient] = useState("");
    const [Aadress, setAadress] = useState("");
    const [Kontakt, setKontakt] = useState("");
    const [Email, setEmail] = useState("");
    const [Telefon, setTelefon] = useState("");
    const [SystemList, setSystemList] = useState(["Apple", "Banana", "Tea", "Coffee"])
    const [System, setSystem] = useState([])
    const handleSelectSystem = (e) => {
        var updatedList = [...System];
        if (e.target.checked) {
            updatedList = [...System, e.target.value];
        } else {
            updatedList.splice(System.indexOf(e.target.value), 1);
        }
        setSystem(updatedList);
    };
   
    const addObject = async () => {
        const andmed = { Klient, Aadress, Kontakt, Email, Telefon, System: System.join(",") }
        await axios.post("http://localhost:3001/api/objektids", andmed).then(res => {
            if (res.status === 200) {
                alert("Objekt edukalt lisatud");
                setKlient("");
                setAadress("");
                setKontakt("");
                setEmail("");
                setTelefon("");
                setSystem([]);
                addObjectToList(andmed);
                console.log(res.data)
            }
            else {
                alert("Objekti ei saanud lisada")
            }
        }).catch(err => {
            alert("Midagi läks valesti")
        })
    }
    const addObjectToList = (item)=>{
        const newList =[]
        allObjects.forEach(value=>{
            newList.push(value);
        })
        newList.push(item)
        console.log(newList)
        setAllObjects(newList.reverse());
    }
    return (
        <Container style={{ display: show }}>
            <Row><h2 className='maker-title'>Lisa Objekt:</h2></Row>
            <Row>
                <Form>
                    <Row>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={Klient} onChange={(e) => setKlient(e.target.value)} type='text' placeholder='Klient*' />
                            </Form.Group>
                        </Col>

                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={Aadress} onChange={(e) => setAadress(e.target.value)} type='text' placeholder='Aadress*' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={Kontakt} onChange={(e) => setKontakt(e.target.value)} type='text' placeholder='Kontakt*' />
                            </Form.Group>
                        </Col>
                        <Col style={{ minWidth: "20vh" }}>
                            <Form.Group className='mb-3'>
                                <Form.Control value={Email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email*' />
                            </Form.Group>
                        </Col>

                        <Form.Group className='mb-3'>
                            <Form.Control value={Telefon} onChange={(e) => setTelefon(e.target.value)} type='text' placeholder='Telefon*' />
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
                                {SystemList ? SystemList.map(data => {
                                    var id = SystemList.indexOf(data);
                                        return (
                                        <Form.Check key={id} label={data} value={data} onChange={handleSelectSystem} type='checkbox' />
                                    );

                                }):null}

                            </ListGroupItem>

                        </ListGroup>
                    </FormGroup>
                    <FormGroup className='mb-3'>
                        <Button onClick={addObject} variant='primary'>Lisa</Button>
                    </FormGroup>




                </Form>
            </Row >
        </Container >
    );
}

export default MakeObject;