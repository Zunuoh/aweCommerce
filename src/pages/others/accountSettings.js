import React, {useState} from 'react';
import { User, Clipboard, Command, Briefcase, Key,  Layout, Map, MinusSquare, Shield } from 'react-feather';

const accountList = [{"id":0, "name":"Profile Information", "message":"Password security, and personal information", "icon":<User/>}, {"id":1, "name":"Advertising", "message":"Manage all automatic keyword settings", "icon":<Clipboard/>}, {"id":2, "name":"User and Permissions", "message":"Control all inventory management settings", "icon":<Command/>}, {"id":3, "name":"Market Intelligence Settings", "message":"Manage your biling settings and information", "icon":<Briefcase/>},
{"id":4, "name":"Billing", "message":"Manage your billing settings an information", "icon":<Key/>}, {"id":5, "name":"Keyword Settings", "message":"Manage your biling settings and information", "icon":<Layout/>}, {"id":6, "name":"Profile Information", "message":"Password security, and personal information", "icon":<Map/>},{"id":7, "name":"Custom Analytics Settings", "message":"Manage your billing settings and information", "icon":<MinusSquare/>},{"id":8, "name":"Custom Analytics Settings", "message":"Manage your billing settings and information", "icon":<Shield/>}]


const AccountSettings = () => {
    const [accounts, setAccounts] = useState(accountList);
    
    return (
        <div style={{padding:40}}>
            <div style={{fontSize:40, fontWeight:"bold"}}>
                Account Settings
            </div>
            
            <div className="accountDiv">
            {accounts && accounts.map(account=>{
                return(
                    <div style={{backgroundColor:"#F5F5F5", width:300, height:150, marginLeft:60, marginTop:10, display:"flex", flexDirection:"row", padding:20  }}>
                         <div>
                            {account.icon} 
                        </div>
                        <div style={{paddingLeft:20}}>
                        <div style={{fontWeight:"bold", fontSize:20}}>
                        {account.name}
                        </div>
                        <div>
                        {account.message}
                        </div>
                      
                     
                        </div>
                       
                   
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default AccountSettings
