import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import MakeNote from '../../components/MakeNote';
import NoteCard from '../../components/NoteCard';
import "../../style/fonts.css"
import {useParams} from "react-router-dom";
function Paevik(props) {
    let {id} = useParams();
    const [makeNote, setNote] = useState("none");
    const [notes, setNotes] = useState([])
    const [object, setObject] = useState();
    const openNoteSec = () => {
        if (makeNote === "none") {
            setNote("block")
        }
        else {
            setNote("none")
        }
    }
    useEffect(()=>{
        getThisObject();
    },[])
    useEffect(()=>{
        loadAllNotes();
    },[notes.length])
    const loadAllNotes =async ()=>{
        await axios.get(`http://localhost:3001/api/paeviks/${id}`).then(res=>{
            if(res.status===200){
                setNotes(res.data) 
            }
            else{
                alert("Midagi läks viltu")
            }
        }).catch(err=>{
            alert("Midagi läks katki")
        })
    }
    const getThisObject= async()=>{
        await axios.get(`http://localhost:3001/api/objektids/${id}`).then(res=>{
            if(res.status===200){
                setObject(res.data);
            }
            else{
                alert("Midagi läks viltu")
            }
        }).catch(err=>{
            alert("Midagi läks katki")
        })
    }
    return (
        <Container>
            <Col>
                <Row style={{ textAlign: "right" }}>
                    <Col className='m-3'>
                        <Button onClick={openNoteSec} variant='success'>Sissekande lisamine</Button>
                    </Col>
                </Row>
                <Row className='mt-2 '><MakeNote id={id} notes={notes} setNotes={setNotes} show={makeNote} /></Row>
            </Col>
            <Col>
                <Row>
                    <h2 className='page-title'>Objekti info:</h2>
                    <Col className=' m-5 mb-1 mr-1 mt-1'>
                        <Row className='mb-2'>
                            <Col >
                                <p style={{ display: "inline" }} className='object-info-titles'>Objekti nimi:</p>{object ? object.Klient:null}
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col>
                                <p style={{ display: "inline" }} className='object-info-titles'>Aadress:</p> {object ? object.Aadress:null}
                            </Col>
                        </Row>
                        <Row className='mb-2'>
                            <Col>
                                <p style={{ display: "inline" }} className='object-info-titles'>Kontakt:</p> {object ? object.Email:null}
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
                    {notes.length ? notes.reverse().map(value => {
                        return (<NoteCard key={value.id} item={value} />)
                    }) : <h2 className='no-items'>SISSEKANDED PUUDUVAD</h2>}

                </Row>
            </Col>
        </Container>
    );
}

export default Paevik;