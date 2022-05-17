import React, { useState } from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import ModalNote from '../../components/ModalNote';
import ModalObject from '../../components/ModalObject';

function AllFunc(props) {
    const [showModal, setShow] = useState()
    const [showModal2, setShow2] = useState()
    const handleClose = () =>{ setShow(false); setShow2(false); } 


    const handleShowModal = () => setShow(true);
    const handleShowModal2 = () => setShow2(true);

    return (
        <Container className='mt-2'>
            <ModalObject show={showModal} handleClose={handleClose} />
            <ModalNote show={showModal2}  handleClose={handleClose}/>
            <Row>
                <Col>
                    <Button onClick={handleShowModal} className='m-1' variant='primary'>Modal</Button>
                    <Button onClick={handleShowModal2} className='m-1' variant='primary'>Modal 2</Button>
                    <Button className='m-1' variant='primary'>Alert</Button>
                </Col>
                <Col>
                    <Button className='m-1' variant='primary'>Dropdown</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AllFunc;