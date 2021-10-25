import React, {useEffect, useState} from "react";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap'
import { Plus, Trash, Edit } from "react-feather";


const BasicTable = () =>{
    const [itemResponse, setItemResponse] = useState({blogs: []});
//    const getData =() =>{
//        Axios.get("http://127.0.0.1:5000/item").then((data)=>{
//            console.log(data)
//        })
//    }
     useEffect(()=>{
       const fetchTableData = async () =>{
           const {data} = await axios("http://127.0.0.1:5000/item")
           setItemResponse({blogs: data.data})
           console.log(data)
       }
       fetchTableData()
     }, [setItemResponse]) 
 
   

 
    return(
        <div>
        <ReactBootStrap.Table striped bordered hover style={{width:"100%"}}>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody style={{ }}>
      {
         itemResponse.blogs && itemResponse.blogs.map((item)=>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.descr}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td style={{width:190}}>
              <Plus style={{marginLeft:20}}/>
              <Trash style={{marginTop:5, marginLeft:20}}/>
              <Edit  style={{marginTop:5, marginLeft:20}}/>
            </td>
          </tr>
         ))
      }
  
  </tbody>
</ReactBootStrap.Table>
        </div>
    )
}

export default BasicTable;