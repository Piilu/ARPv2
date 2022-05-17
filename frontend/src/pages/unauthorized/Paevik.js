import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import MakeNote from '../../components/MakeNote';
import NoteCard from '../../components/NoteCard';
import "../../style/fonts.css"
function Paevik(props) {
    const [makeNote, setNote] = useState("none");
    const openNoteSec = () => {
        if (makeNote === "none") {
            setNote("block")
        }
        else {
            setNote("none")
        }
    }
    return (
        <Container>
            <Col>
                <Row style={{ textAlign: "right" }}>
                    <Col className='m-3'>
                        <Button onClick={openNoteSec} variant='success'>Sissekande lisamine</Button>
                    </Col>
                </Row>
                <Row className='mt-2 '><MakeNote show={makeNote} /></Row>
            </Col>
            <Col>
                <Row>
                    <h2 className='page-title'>Objekti info:</h2>
                    <Col className=' m-5 mb-1 mr-1 mt-1'>
                        <Row className='mb-2'>
                            <Col >
                                <p style={{ display: "inline" }} className='object-info-titles'>Objekti nimi:</p> asd
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col>
                                <p style={{ display: "inline" }} className='object-info-titles'>Aadress:</p> asd
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col>
                                <p style={{ display: "inline" }} className='object-info-titles'>Kontakt:</p> asd
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Col>
            <Col className='mt-3'>
                <Row>
                    <h2 className='page-title'>Sissekanded:</h2>
                </Row>
                <Row className='mt-3'>

                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />
                    <NoteCard />

                    <NoteCard />


                </Row>
            </Col>
        </Container>
    );
}

export default Paevik;