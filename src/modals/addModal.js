import React, {useState} from 'react';
import style from '../modals/modal.css'

const AddModal = ({callback, closeModal}) => {
    const emptyItemList = {
        name:"",
        descr:"",
        price:"",
        qty:""
    };

    const [itemList, setItemList] = useState(emptyItemList);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:5000/item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemList),
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            callback();
          });
        // useCallback()
      };
    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => closeModal(false)}
              style={{ fontFamily: "Montserrat", color: "green" }}
            >
              {" "}
              X{" "}
            </button>
          </div>
          <div className="title">
            <h1 style={{ color: "green", fontFamily: "Montserrat" }}>
              ADD WALLET
            </h1>
          </div>
          <div className="modalBody">
            <p>
              <form>
                <div
                  className="form-row"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="form-group col-md-5">
                    <label for="firstName" style={{ fontFamily: "Montserrat" }}>
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Name"
                      required
                      value={itemList.name}
                      onChange={(e) =>
                        setItemList({
                          ...itemList,
                          lastName: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                  <div className="form-group col-md-6" style={{ marginLeft: 20 }}>
                    <label for="lastName" style={{ fontFamily: "Montserrat" }}>
                      Description:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      value={itemList.descr}
                      onChange={(e) =>
                        setItemList({
                          ...itemList,
                          descr: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                </div>
                <div
                  className="form-row"
                  style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
                >
                  <div className="form-group col-md-5">
                    <label for="inputEmail4" style={{ fontFamily: "Montserrat" }}>
                      Price:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="ID Card Type"
                      value={itemList.price}
                      onChange={(e) =>
                        setItemList({
                          ...itemList,
                          price: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                  <div className="form-group col-md-6" style={{ marginLeft: 20 }}>
                    <label
                      for="inputPassword4"
                      style={{ fontFamily: "Montserrat" }}
                    >
                      Quantity:
                    </label>
                    <input
                      required  
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="ID Card No"
                      value={itemList.qty}
                      onChange={(e) =>
                        setItemList({
                          ...itemList,
                          qty: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                </div>
                {/* <div
                  className="form-row"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="form-group col-md-3" style={{ marginTop: 20 }}>
                    <label for="inputEmail4" style={{ fontFamily: "Montserrat" }}>
                      Available Balance:
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="GHC"
                      value={createWallet.availableBalance}
                      onChange={(e) =>
                        setCreateWallet({
                          ...createWallet,
                          availableBalance: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                  <div
                    className="form-group col-md-3"
                    style={{ marginLeft: 170, marginTop: 20 }}
                  >
                    <label for="" style={{ fontFamily: "Montserrat" }}>
                      Transaction Limit:
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      id=""
                      placeholder="GHC"
                      value={createWallet.perTransactionLimit}
                      onChange={(e) =>
                        setCreateWallet({
                          ...createWallet,
                          perTransactionLimit: e.target.value,
                        })
                      }
                      style={{ borderColor: "green", fontFamily: "Montserrat" }}
                    />
                  </div>
                </div> */}
              </form>
            </p>
          </div>
          <div className="footer">
            <button
              onClick={() => closeModal(false)}
              style={{ fontFamily: "Montserrat" }}
            >
              Cancel
            </button>
            <button
              style={{ fontFamily: "Montserrat" }}
              type="submit"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    )
}

export default AddModal
