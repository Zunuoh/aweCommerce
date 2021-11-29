import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 25,
          backgroundColor: "#FFD524",
          borderWidth: 1,
        //   borderRadius: 20,
          width: 190,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          marginTop:20, 
          marginLeft:50,
        //   color:"white"

        }}
      >
        aweCommerce
      </div>
     
    </div>
  );
};

export default Header;
