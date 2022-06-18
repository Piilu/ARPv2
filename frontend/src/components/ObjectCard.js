import React,{useState}from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../style/cards.css"
import ObjectModal from './ModalLayout/ObjectModal';
import Modal from "./Modal";

function ObjectCard(props) {
    const{aadress,susteem,item} = props
    const [showModal, setShowModal] = useState(false)
    const [show, setShow] = useState("none")
    const openModal = ()=>{
        console.log("testing")
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <Container id={item.id}  className='object-card '>
            <Modal body={<ObjectModal item={item}/>} show={showModal} handleClose={handleClose}/>
            <Row className='flex-nowrap card-titles'>
                <Col>Aadress</Col>
                <Col>Süsteem</Col>
            </Row>
            <Row className='flex-nowrap mt-2 card-text'>
                <Col>{aadress}</Col>
                <Col>{susteem}</Col>
            </Row>
            <Row style={{textAlign:"right"}} className='mt-4'>
                <Col>
                    <Button onClick={openModal} size='sm' variant='primary'>Vaata lähemalt</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default ObjectCard;