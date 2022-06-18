import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import "../style/cards.css"

function NoteCard(props) {
    const { item } = props
    return (
        <Container className='note-card'>
            <Row >
                <Col className='mt-2'>
                    <p style={{ display: "inline" }} className='card-titles'>Kuupäev: </p>{item.createdAt}
                </Col>
                <Col className='mt-2'>
                    <p style={{ display: "inline" }} className='card-titles'>Liik: </p>{item.Liik}
                </Col>
                <Col className='mt-2'>
                    <p style={{ display: "inline" }} className='card-titles'>Süsteem: </p>{item.System}
                </Col>
                <Col className='mt-2'>
                    <p style={{ display: "inline" }} className='card-titles'>Tegija: </p>{item.Tegija}
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <p style={{ display: "inline" }} className='card-titles'>Sisu: </p>{item.Sisu}
                </Col>

            </Row>
            <Row style={{ textAlign: "right" }}>
                <Col>
                    <Button size='sm' variant="warning">PDF</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NoteCard;