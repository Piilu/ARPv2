import React, { useState } from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import MakeNote from '../../components/MakeNote';
import MakeObject from '../../components/MakeObject';
import NoteCard from '../../components/NoteCard';
import ObjectCard from '../../components/ObjectCard';
import Modal from '../../components/Modal';
import ObjectModal from '../../components/ModalLayout/ObjectModal';

function AllFunc(props) {
    const { alerts, makeAlert } = props
    const [show, setShow] = useState("none")
    const [show2, setShow2] = useState("none")
    const [showModal, setShowModal] = useState(false)
    const openNoteMakeing = () => {
        if (show == "none") {
            setShow("block")
        }
        else {
            setShow("none")
        }
    }
    const openObject = () => {
        if (show2 == "none") {
            setShow2("block")
        }
        else {
            setShow2("none")
        }
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const value = [
        {
           createdAt:"10:00",
           Liik:"ATS",
           System:"Lahe",
           Tegija:"Rainer",
           Sisu:"Lahe sisu", 
        }
    ]
    return (
        <Container className='mt-2'>
            <Modal body={<ObjectModal />} show={showModal} handleClose={handleClose} />
            <Row>
                <Col>
                    <Button onClick={() => { makeAlert({ id: alerts.length, variant: "success", text: "Testing1" }) }} className='m-1' variant='success'>Alert Success</Button>
                    <Button onClick={() => { makeAlert({ id: alerts.length, variant: "warning", text: "Testing1" }) }} className='m-1' variant='warning'>Alert Waring</Button>
                    <Button onClick={() => { makeAlert({ id: alerts.length, variant: "danger", text: "Testing1" }) }} className='m-1' variant='danger'>Alert Error</Button>
                    <Button className='m-1' onClick={() => setShowModal(true)} variant="info">Modal</Button>
                    <Row className='mt-2 '><MakeObject id={69} show={show2} /></Row>

                </Col>
                <Col>
                    <Button onClick={openObject} className='m-1' variant='primary'>Lisa Objekt</Button>
                    <Button onClick={openNoteMakeing} className='m-1' variant='primary'>Lisa päevik</Button>
                    <Row className='mt-2 '><MakeNote show={show} /></Row>
                </Col>
                <Row>
                    <Col>
                        <ObjectCard aadress="Aadressike 1" susteem="Susteemike 1" item={{
                            aadress: "Test1",
                            susteem: "sysarp",
                            id: 698,
                        }}
                        />
                        <ObjectCard aadress="Aadressike 2" susteem="Susteemike 2" item={{
                            aadress: "Test1",
                            susteem: "sysarp",
                            id: 699,
                        }}
                        />

                    </Col>
                    <Col>
                        <NoteCard key={1} item={value}/>
                        <NoteCard key={2} item={value}/>

                    </Col>
                </Row>
            </Row>

        </Container>
    );
}

export default AllFunc;