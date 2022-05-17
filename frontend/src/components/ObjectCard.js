import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../style/cards.css"
function ObjectCard(props) {
    const{aadress,susteem,item} = props
    return (
        <Container id={item.id}  className='object-card '>
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
                    <Button onClick={()=>console.log(item)} size='sm' variant='primary'>Vaata lähemalt</Button>
                </Col>
            </Row>

        </Container>
    );
}

export default ObjectCard;