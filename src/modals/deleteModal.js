import React from 'react'

const DeleteModal = ({closeModal, id, callback}) => {
    // const deleteItem = async () => {
    //     await WalletService.deleteItem(id);
    //     callback();
    //   };
    
    return (
        <div className="modalBackground">
        <div className="deleteModalContainer">
          <div className="titleCloseBtn">

          <button onClick={()=>closeModal(false)} style={{fontFamily:"Montserrat", color:"green"}}> X </button>
          </div>
          <div className="title">
            <h3 style={{color:"green", fontFamily:"Montserrat"}}>DELETE WALLET</h3>
          </div>
          <div className="modalBody" style={{fontFamily:"Montserrat"}}>
            <p>Are you sure you want to proceed?</p>
          </div>
          <div className="footer">
            {/* <button style={{fontFamily:"Montserrat"}} onClick={deleteWallet}>Yes</button> */}
            <button onClick={()=>closeModal(false)} style={{fontFamily:"Montserrat"}}>No</button>
          </div>
        </div>
      </div>
    )
}

export default DeleteModal;