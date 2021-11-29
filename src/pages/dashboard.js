import React from 'react'
import '../styles/style.css'
import Header from './headers'
import {Columns, MessageSquare, MessageCircle,Settings, User, Bell} from 'react-feather'

const Dashboard = () => {
    return (
        <div className="dashMain">
            <Header/>
        <div className="dashContainer">
            <div style={{display:"flex", flexDirection:"row"}}>
               <Columns size={20}/>
                <div style={{marginLeft:10}}>Dashboard</div>
            </div>
            
            <div style={{marginTop:30, display:"flex", flexDirection:"row"}}>
                <MessageSquare/>
                <div  style={{marginLeft:10}}>Message</div>
            </div>

            <div style={{marginTop:30, display:"flex", flexDirection:"row"}}>
                <MessageCircle/>
                <div style={{marginLeft:10}}>Report</div>
            </div>

            <div style={{marginTop:30, display:"flex", flexDirection:"row"}}>
                <Settings/>
                <div style={{marginLeft:10}}>Setting</div>
            </div>

            <div style={{marginTop:30, display:"flex", flexDirection:"row"}}>
                <User/>
                <div style={{marginLeft:10}}>Account</div>
            </div>

            <div style={{marginTop:30, display:"flex", flexDirection:"row"}}>
                <Bell/>
                <div style={{marginLeft:10}}>Notifications</div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard
