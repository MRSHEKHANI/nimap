import React from "react";

function Loggedinpage() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className="divcent">
        <h1>Login successful</h1>
        <button className="logoutbtn" onClick={handleClick}>
          logout
        </button>
      </div>
    </div>
  );
}

export default Loggedinpage;
