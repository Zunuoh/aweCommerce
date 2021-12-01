import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Plus, Trash, Edit } from "react-feather";
import AddModal from "../../modals/addModal";
import DeleteModal from "../../modals/deleteModal";


const BasicTable = () => {
  const [itemResponse, setItemResponse] = useState({ blogs: [] });
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    const fetchTableData = async () => {
      const { data } = await axios("http://127.0.0.1:5000/item");
      setItemResponse({ blogs: data.data });
      console.log(data);
    };
    fetchTableData();
  }, [openModal, setItemResponse]);

  return (
    <div>
      <div style={{display:"flex",
            justifyContent: "flex-end",
            margin:20}}>
        <button
          style={{
            backgroundColor: "#FFD524",
            width: 100,
            height: 50,
            borderWidth: 0,
            // borderRadius: 20,
            fontFamily: "Montserrat",
            fontWeight: "bold",
            // color:"white"
          }}
          onClick={()=>{
            setOpenModal(true);
          }}
        >
          Add Item
        </button>
        <AddModal 
          isOpen={openModal} 
          onClose={() => {
            setOpenModal(false);
          }}/>
      </div>
      {/* {openAddModal && (
        <AddModal
          closeModal={setOpenAddModal}
          // id={item.id}
          callback={() => {
            // fetchTableData();
            setOpenAddModal(false);
          }}
        />
      )} */}
      <ReactBootStrap.Table striped bordered hover style={{ width: "100%" }}>
        <thead style={{backgroundColor:"#55185D", borderColor:"black", color:"white"}}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{width:40}}>
          {itemResponse.blogs &&
            itemResponse.blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.descr}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td style={{ width: 190 }}>
                <div style={{display:"flex", flexDirection:"row"}}>
                  {/* <div>
                  <Trash
                    style={{ marginTop: 5, marginLeft: 40, color:"#876796" }}
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setItemResponse(item);
                    }}
                  />
                  <DeleteModal
                  isOpen={openDeleteModal}
                  onClose={()=>{setOpenDeleteModal(false)}}/>
                  </div> */}
                  <div>
                  <Edit
                    style={{ marginTop: 5, marginLeft: 40, color:"#876796" }}
                    onClick={() => {
                      setOpenEditModal(true);
                      setItemResponse(item);
                    }}
                  />
                  </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default BasicTable;
