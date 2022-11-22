import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drop from "./dropdown/Drop";
import Task from "./task/Task";
import Authlogin from "./authentication/Authlogin";
import AuthenticLogin from "../authentication/AuthenticLogin";
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Drop />} />
          <Route exact path="/task" element={<Task />} />
          <Route exact path="/user" element={<AuthenticLogin />} />
          <Route exact path="/logout" element={<Authlogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
