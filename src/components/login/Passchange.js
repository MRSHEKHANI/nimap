import React from "react";

function Passchange() {
  return (
    <div>
      <form className="changepass">
        <label>
          User-Name:
          <input
            type="text"
            name="name"
            className="username"
            placeholder="enter userName"
            required
          />
        </label>
        <label className="newpasslabel">
          New-Password:
          <input
            type="password"
            name="pass"
            className="newpass"
            placeholder="enter New-password"
            required
          />
          <button
            className="savepass"
            onClick={() => {
              alert("Password SAVED");
            }}
          >
            Save Password
          </button>
          <button
            className="logoutsession"
            onClick={() => {
              alert("Logged OUT");
            }}
          >
            Logout
          </button>
        </label>
      </form>
    </div>
  );
}

export default Passchange;
