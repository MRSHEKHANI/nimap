import React, { useState } from "react";
// import Drop from "./dropdown/Drop";
// import Dropdown from "./dropdown/Dropdown";
function Navbar() {
  //   const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="heading">
        <div>
          <h1 className="logo">LOGO</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/task">TASK</a>
            </li>
            <li>
              <a href="/user">USER</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Dropdown selected={selected} setSelected={setSelected} />
      <Drop /> */}
    </div>
  );
}

export default Navbar;
