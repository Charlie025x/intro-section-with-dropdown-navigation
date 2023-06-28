import ArrowDown from "../../assets/icon-arrow-down.svg";
import ArrowUp from "../../assets/icon-arrow-up.svg";

import { useRef } from "react";

const AccordionItem = ({ i, data, onToggle, active }) => {
  const { title, submenu, imgLink } = data;
  console.log(i);
  console.log(data);
  const ulRef = useRef();

  return (
    <li className="disable-select">
      {title}
      {submenu && (
        <img
          onClick={onToggle}
          className="accordion-toggle"
          src={!active ? ArrowDown : ArrowUp}
          alt="menu icon"
        />
      )}
      <ul className={`ul-${i} ${!active && "height-0 d-none"}`}>
        {submenu &&
          submenu.map((submenu, index) => (
            <li key={index}>
              {imgLink && (
                <img
                  src={require("../../assets/" + imgLink[index] + ".svg")}
                  alt={submenu}
                />
              )}
              {submenu}
              <ul ref={ulRef}></ul>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default AccordionItem;
