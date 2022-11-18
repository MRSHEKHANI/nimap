import React, { useState } from "react";

const PEOPLE = [
  {
    code: "",
    name: "Battle",

    group: "Dropdown1",
    name: "The Battle of the Defile was fought over three days in July 731 in and near the Takhtakaracha Pass (in modern Uzbekistan) between a large army of the Umayyad Caliphate and forces of the Türgesh Khaganate. The Türgesh had been besieging Samarkand; Samarkand's commander, Sawra ibn al-Hurr al-Abani, sent a request for relief to the newly appointed governor of Khurasan, Junayd ibn Abd al-Rahman al-Murri. Junayd's 28,000-strong army was attacked by the Türgesh in the pass, and although the Umayyad army managed to extricate itself and reach Samarkand, it suffered heavy casualties.",
  },
  {
    group: "Dropdown2",
    name: "The Battle of the Defile was fought over three days in July 731 in and near the Takhtakaracha Pass (in modern Uzbekistan) between a large army of the Umayyad Caliphate and forces of the Türgesh Khaganate. The Türgesh had been besieging Samarkand; Samarkand's commander, Sawra ibn al-Hurr al-Abani, sent a request for relief to the newly appointed governor of Khurasan, Junayd ibn Abd al-Rahman al-Murri. Junayd's 28,000-strong army was attacked by the Türgesh in the pass, and although the Umayyad army managed to extricate itself and reach Samarkand, it suffered heavy casualties.:Legd;lsae",
  },
  {
    group: "Dropdown3",
    name: "The Battle of the Defile was fought over three days in July 731 in and near the Takhtakaracha Pass (in modern Uzbekistan) between a large army of the Umayyad Caliphate and forces of the Türgesh Khaganate. The Türgesh had been besieging Samarkand; Samarkand's commander, Sawra ibn al-Hurr al-Abani, sent a request for relief to the newly appointed governor of Khurasan, Junayd ibn Abd al-Rahman al-Murri. Junayd's 28,000-strong army was attacked by the Türgesh in the pass, and although the Umayyad army managed to extricate itself and reach Samarkand, it suffered heavy casualties.;irhg;a sdowrhjgoa oijtuerotajhu otuoi",
  },
];
function Drop() {
  const [people, setPeople] = useState(PEOPLE);

  function selectGroup(e) {
    const value = e.target.value;
    const filteredPeople =
      value === "inital"
        ? PEOPLE.filter((p) => p.code === value)
        : PEOPLE.filter((p) => p.group === value);
    setPeople(filteredPeople);
  }
  return (
    <div className="info">
      <select className="selection" onChange={selectGroup}>
        <option value="inital">all</option>
        <option value="Dropdown1">Dropdown1</option>
        <option value="Dropdown2">Dropdown2</option>
        <option value="Dropdown3">Dropdown3</option>
      </select>

      {people.map((p) => (
        <div>{p.name}</div>
      ))}
    </div>
  );
}

export default Drop;
