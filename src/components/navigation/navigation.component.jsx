import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close-menu.svg";

import Button from "../button/button.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    console.log(menuToggle);
  });

  const showNavbar = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
      {/* <img
        onClick={showNavbar}
        className="menu-icon"
        src={
          navRef.current.classList.contains("responsive_nav")
            ? MenuIcon
            : CloseIcon
        }
        alt="menu icon"
      /> */}
      {/* <button>
        <img className="menu-icon" src={MenuIcon} alt="menu icon" />
      </button> */}
      <ul className={`nav-links ${menuToggle ? "responsive_nav" : ""}`}>
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <img
        onClick={showNavbar}
        className="menu-icon"
        src={!menuToggle ? MenuIcon : CloseIcon}
        alt="menu icon"
      />
      {/* <ul className="auth-buttons">
        <li>
          <Button text="Login" />
        </li>
        <li>
          <Button text="Register" />
        </li>
      </ul> */}
    </nav>
  );
};

export default Navigation;
