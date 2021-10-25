import React from 'react';
import Header from './headers';
import BasicTable from './basicTable';
import * as ReactBootStrap from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';

const HomePage = () =>{
    return(
        <div>
              {/* <Header/> */}
        <Row style={{marginTop:20}}>
    <Col sm={2} style={{height:"100vh"}}>sm=4</Col>
    <Col sm={10} style={{}}>
        <BasicTable style={{paddingLeft:60}}/>
    </Col>
        </Row>
   
        </div>
    
        
    )
}

export default HomePage;