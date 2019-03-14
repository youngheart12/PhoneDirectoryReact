import React from 'react';
import './datalist.css';
import {Container,Row,Col,Button} from 'reactstrap';
const datalist=(props)=>
{
    return (
        <Container className="container-fluid">
        <Row className="Rowpros">
        {props.arraylist}
            <Col md="4">{props.name}</Col>
            <Col md="4">{props.number}</Col>
            <Col md="4"><Button color="danger" onClick={props.delete}><b>DELETE</b></Button></Col>
        </Row>
        </Container>
    )
}
export default datalist;