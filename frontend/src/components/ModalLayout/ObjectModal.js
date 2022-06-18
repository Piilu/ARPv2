import React from 'react';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import QRCode from 'react-qr-code';
import "../../style/cards.css"
import "../../style/modals.css"

function ObjectModal(props) {
    const{item}=props
    return (
        <Container fluid>
            <Modal.Header closeButton>
                <Modal.Title >Täpsem vaade</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Klient: </p> {item.Klient}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Aadress: </p> {item.Aadress}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Kontakt: </p> {item.Kontakt}
                            </Col>
                        </Row>

                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Email: </p> {item.Email}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Telefon: </p> {item.Telefon}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ display: "inline" }} className='card-titles'>Süsteem: </p> {item.System}
                            </Col>
                        </Row>

                    </Col>


                    <Col>
                        <div className='qr-box'>
                            <QRCode size={70} value={`${window.location.href}paevik/${item.id}`}/>
                            <Row><a className='link-size' href={`${window.location.href}paevik/${item.id}`}>{`${window.location.href}paevik/${item.id}`}</a></Row>
                        </div>
                    </Col>
                </Row>

            </Modal.Body>
        </Container>
    );
}

export default ObjectModal;