import React from 'react';
import Header from '../header/headers';
import BasicTable from '../others/basicTable';
import Dashboard from '../others/dashboard';
import * as ReactBootStrap from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';

const HomePage = () =>{
    return(
    <div>
    {/* <Header/> */}
    <Row style={{}}>
    <Col sm={2} style={{height:"100vh"}}>
        <Dashboard/>
    </Col>
    <Col sm={10} style={{}}>
        <BasicTable style={{paddingLeft:60}}/>
    </Col>
        </Row>
   
    </div>
    
        
    )
}

export default HomePage;