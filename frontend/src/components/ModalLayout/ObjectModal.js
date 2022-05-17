import React from 'react';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import "../../style/cards.css"
import "../../style/modals.css"

function ObjectModal(props) {
    return (
        <Container fluid>
            <Modal.Header closeButton>
                <Modal.Title >Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Klient: </p> Lorem
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Aadress: </p> Lorem
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Kontakt: </p> Lorem
                            </Col>
                        </Row>

                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Email: </p> Lorem
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Telefon: </p> Lorem
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Süsteem: </p> Lorem
                            </Col>
                        </Row>

                    </Col>


                    <Col>
                        <div className='qr-box'>
                            <QRCode size={70} value={"test"}/>
                            <Row><a className='link-size' href='#'>Link päeviku</a></Row>
                        </div>
                    </Col>
                </Row>

            </Modal.Body>
        </Container>
    );
}

export default ObjectModal;