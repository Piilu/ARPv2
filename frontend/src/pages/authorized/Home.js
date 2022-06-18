import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MakeObject from '../../components/MakeObject';
import ObjectCard from '../../components/ObjectCard';
import "../../style/fonts.css"

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
    const [allObjects, setAllObjects] = useState([])
    const getAllObjektid = async()=>{
        await axios.get("http://localhost:3001/api/objektids").then(res=>{
            if(res.status==200){
                setAllObjects(res.data);
                console.log(res.data)
                
            }
            else{
                alert("Midagi läks viltu")
            }
        }).catch(err=>{
            alert("Midagi läks KATKI")
        })
    }
  
    useEffect(() => {
        getAllObjektid();
    },[allObjects.length]);

    return (
        <Container>
            <Row style={{ textAlign: "right" }}>
                <Col className='m-3'>
                    <Button onClick={openMakeObject} variant="success">Lisa uus objekt</Button>
                </Col>
            </Row>
            <Row>
                <MakeObject allObjects={allObjects} setAllObjects={setAllObjects} show={makeObjectSec} />

            </Row>
            <Row>
                <Col style={{ maxWidth: "20vh" }}>
                    <Form.Control placeholder='Otsi ...' type='text'></Form.Control>
                </Col>
            </Row>
            <Row className='mt-3'>

                <Col>
                    {allObjects.length ? allObjects.reverse().map(value => {
                        console.log("Lisatud objektid ID"+value.id)
                        return (
                            <ObjectCard key={value.id} aadress={value.Aadress} susteem={value.System} item={value} />
                        );
                    }) : <h2 className='no-items'>OBJEKTE POLE</h2>}


                </Col>

            </Row>

        </Container>
    );
}

export default Home;