import React, { useState } from "react";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const option = ["Dropdown 1", "Dropdown 2", "Dropdown 3", "Dropdown 4"];
  const context = [
    "oalihjwespotihanjosdinhfgoanrtg",
    "lshdgfolhiasodfhginoiaret",
    "aouishdfpgioahpd",
    "lsajkh",
  ];
  let a = document.getElementById("rangers");

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        placeholder="Dropdown"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected} <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-contents">
          {option.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-items"
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {option.onClick((context) => {})}
      <div class="show-hide" hidden id="rangers">
        Rangers need to get rid of Rick Nash
      </div>

      {/* <div class="dropdown-options">
        <div class="show-hide" id="rangers">
          Rangers need to get rid of Rick Nash
        </div>
        <div class="show-hide" id="islanders">
          Islanders will lose to the Rangers in a 4 game sweep.
        </div>
        <div class="show-hide" id="penguins">
          Nobody likes the Penguins
        </div>
      </div> */}
    </div>
  );
}

export default Dropdown;
