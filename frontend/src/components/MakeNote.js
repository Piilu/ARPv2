import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Row, Col, FormGroup, Button } from 'react-bootstrap';
import "../style/fonts.css"
function MakeNote(props) {
    const { show, setNotes, notes } = props
    const [Tegija, setTegija] = useState("");
    const [Liik, setLiik] = useState("");
    const [System, setSystem] = useState("");
    const [File, setFile] = useState("");
    const [Sisu, setSisu] = useState("");
    const addNote = async () => {
        const andmed = { Tegija, Liik, System, FileURL: File, Sisu, ObjektID: 1 }
        await axios.post("http://localhost:3001/api/paeviks", andmed).then(res => {
            if(res.status===200){
                alert("Uus teade edukalt tehtud")
                setTegija("");
                setLiik("")
                setFile("")
                setSystem("")
                setSisu("")
                addNewNoteList(andmed)
            }
            else{
                alert("Ei saa teadet lisada")
            }
        }).catch(err => {
            alert("Mida läks valesti")
            console.log(err)
        })
    }
    const addNewNoteList = (item)=>{
        const newNote =[]

        notes.forEach(value=>{
            newNote.push(value);
        })
        newNote.push(item);
        setNotes(newNote.reverse());
    }
    const selectFile = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0].name)
    }
    return (
        <Container style={{ display: show }}>
            <Row><h2 className='maker-title'>Lisa Sissekanne:</h2></Row>
            <Row>
                <Form>
                    <Row>

                        <Col className='mb-3' style={{ minWidth: "20vh" }}>
                            <Form.Control value={Tegija} onChange={(e) => { setTegija(e.target.value) }} type='text' placeholder='Tegija*' />
                        </Col>
                        <Col className='mb-3' style={{ minWidth: "20vh" }} >
                            <Form.Select value={Liik} onChange={(e) => { setLiik(e.target.value) }} >
                                <option value="">Vali liik*</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </Form.Select>
                        </Col>
                        <Col className='mb-3' style={{ minWidth: "20vh" }}>
                            <Form.Select value={System} onChange={(e) => { setSystem(e.target.value) }}>
                                <option value="">Vali süsteem*</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </Form.Select>
                        </Col>
                        <FormGroup className='mb-3 '>

                            <Form.Control onChange={selectFile} type="file" />
                        </FormGroup>
                        <FormGroup className='mb-3'>

                            <Form.Control value={Sisu} onChange={(e) => { setSisu(e.target.value) }} as="textarea" rows={3} placeholder="Sisu*" />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <Button onClick={addNote} variant='primary'>Lisa</Button>
                        </FormGroup>

                    </Row>
                </Form>
            </Row>
        </Container>
    );
}

export default MakeNote;