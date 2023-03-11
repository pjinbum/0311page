import React from "react";
import List from "./List";
import logo from "./imim/lllo.png";

let stylel = {
  box: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: "100px",
    backgroundColor: "#fff",
  },

  logo: {
    width: "100px",
    height: "100px",
  },
};

function Header() {
  return (
    <div  style={stylel.box}>
      <div>
        <a href="../public/index.html">
          <img src={logo} alt="lllo" style={stylel.logo} />
        </a>
      </div>
      <div className="listmenu">
        <List></List>
      </div>
    </div>
  );
}

export default Header;
