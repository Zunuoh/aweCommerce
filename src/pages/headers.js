import React from 'react';

const Header = () =>{
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{fontSize:40, backgroundColor:"#F35F3A", borderWidth:1, borderRadius:20, width:290, height:60, justifyContent:"center", alignItems:"center", display:"flex", fontFamily:"Montserrat", fontWeight: "bold"}}>aweCommerce</div>
            <div>
                <button style={{backgroundColor:"#F35F3A", width:100, height:50, borderWidth:0, borderRadius:20, fontFamily:"Montserrat", fontWeight: "bold"}}>ADD ITEM</button>
            </div>
        </div>
    )
}

export default Header;