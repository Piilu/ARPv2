import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MakeObject from '../../components/MakeObject';
import ObjectCard from '../../components/ObjectCard';

function Home(props) {
    const [makeObjectSec, setMakeObjectSec] = useState("none")
    const openMakeObject = () => {
        if (makeObjectSec === "none") {
            setMakeObjectSec("block")
        }
        else {
            setMakeObjectSec("none")
        }
    }
    const [allObjects, setAllObjects] = useState([
        {
            aadress:"Test1",
            susteem:"sysarp",
            id:0,
        }
    ])
    const addNewObject=(item) =>{
        console.log(item)
    }
    return (
        <Container>
            <Row style={{ textAlign: "right" }}>
                <Col className='m-3'>
                    <Button onClick={openMakeObject} variant="success">Lisa uus objekt</Button>
                </Col>
            </Row>
            <Row>
                <MakeObject id={allObjects.length} addNewObject={addNewObject} show={makeObjectSec} />

            </Row>
            <Row>
                <Col style={{ maxWidth: "20vh" }}>
                    <Form.Control placeholder='Otsi ...' type='text'></Form.Control>
                </Col>
            </Row>
            <Row className='mt-3'>

                <Col>
                {allObjects.length ? allObjects.map(value=>{
                    return(
                        <ObjectCard key={value.id} aadress={value.aadress} susteem={value.susteem} item={value} />
                        );
                }):null}


                </Col>

            </Row>

        </Container>
    );
}

export default Home;