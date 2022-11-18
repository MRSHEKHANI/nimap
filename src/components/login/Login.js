import React from "react";
import Passchange from "./Passchange";

function Login(props) {
  return (
    <div>
      <form className="login">
        <label>
          UserName:
          <input
            type="text"
            name="name"
            className="inputtext"
            placeholder="enter userName"
            required
          />
        </label>

        <label className="passlabel">
          Password:
          <input
            type="password"
            name="pass"
            className="password"
            placeholder="enter password"
            required
          />
        </label>
        <button
          className="changepass "
          onClick={() => {
            <Passchange />;
          }}
        >
          Change Password
        </button>
        <button
          className="logout"
          onClick={() => {
            alert("logged out");
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default Login;
