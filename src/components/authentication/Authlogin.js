import React, { useRef } from "react";
import Loggedinpage from "./Loggedinpage";

function Authlogin() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <Loggedinpage />
      ) : (
        <form className="formcent" onSubmit={handleSubmit}>
          <div>
            <label className="loginInput">
              UserName:
              <input
                type="text"
                placeholder="enter your UserEmail"
                ref={email}
              />
            </label>
          </div>
          <div>
            <label className="loginPass">
              Password:
              <input
                placeholder="enter your Password"
                type="password"
                ref={password}
              />
            </label>
          </div>
          <button className="logbtn">Login</button>
        </form>
      )}
    </div>
  );
}
export default Authlogin;
