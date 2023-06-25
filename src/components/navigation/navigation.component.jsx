import { useRef, useState } from "react";

import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close-menu.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import arrowUp from "../../assets/icon-arrow-up.svg";
import TodoIcon from "../../assets/icon-todo.svg";
import CalanderIcon from "../../assets/icon-calendar.svg";
import RemindersIcon from "../../assets/icon-reminders.svg";
import PlanningIcon from "../../assets/icon-planning.svg";

import Button from "../button/button.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const [navMenuToggle, setNavMenuToggle] = useState(false);
  // const [accordionToggle, setAccordionToggle] = useState(false);

  const ulRef = useRef();

  const showNavbar = () => {
    setNavMenuToggle(!navMenuToggle);
  };

  // const showAccordion = () => {
  //   setAccordionToggle(!accordionToggle);
  // };

  const accordionToggle = () => {
    ulRef.current.classList.toggle("height-0");
  };

  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
      <img
        onClick={showNavbar}
        className="menu-icon"
        src={!navMenuToggle ? MenuIcon : CloseIcon}
        alt="menu icon"
      />
      <ul className={`nav-links ${navMenuToggle ? "responsive_nav" : ""}`}>
        <li>
          Features
          <img
            // onClick={showAccordion}
            onClick={accordionToggle}
            className="accordion-toggle"
            src={!accordionToggle ? arrowDown : arrowUp}
            alt="menu icon"
          />
          {/* {accordionToggle && ( */}
          <ul ref={ulRef}>
            <li>
              <img src={TodoIcon} alt="TodoIcon" /> ToDo List
            </li>
            <li>
              <img src={CalanderIcon} alt="CalanderIcon" /> Calander
            </li>
            <li>
              <img src={RemindersIcon} alt="RemindersIcon" /> Reminders
            </li>
            <li>
              <img src={PlanningIcon} alt="PlanningIcon" /> Planning
            </li>
          </ul>
          {/* )} */}
        </li>
        <li>
          Company
          <img
            // onClick={showAccordion}
            className="accordion-toggle"
            src={!accordionToggle ? arrowDown : arrowUp}
            alt="menu icon"
          />
          <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>Careers</li>
        <li>About</li>
        {/* <li> */}
        <Button text="Login" className="inverted no-border" />
        {/* </li> */}
        {/* <li> */}
        <Button text="Register" className="inverted" />
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
