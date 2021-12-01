import React from 'react'
import AccountSettings from '../others/accountSettings'
import {  Row, Col } from 'react-bootstrap';
import Dashboard from '../others/dashboard';

const AccountHome = () => {
    return (
        <div>
    {/* <Header/> */}
    <Row style={{}}>
    <Col sm={2} style={{height:"100vh"}}>
        <Dashboard/>
    </Col>
    <Col sm={10} style={{}}>
        <AccountSettings style={{paddingLeft:60}}/>
    </Col>
        </Row>
   
    </div>
    )
}

export default AccountHome
