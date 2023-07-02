import { useState } from "react";
import Media from "react-media";

import AccordionItem from "./AccordionItem";
import { NavData } from "../../data";

import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close-menu.svg";

import Button from "../button/button.component";

import "./navigation.styles.scss";

const MobileNavigation = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const [navMenuToggle, setNavMenuToggle] = useState(false);

  const showNavbar = () => {
    setNavMenuToggle(!navMenuToggle);
  };

  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
      {/* hide menu icon on desktop */}
      <Media query="(max-width: 1023px)">
        {(matches) => {
          return matches ? (
            <img
              onClick={showNavbar}
              className="menu-icon"
              src={!navMenuToggle ? MenuIcon : CloseIcon}
              alt="menu icon"
            />
          ) : (
            ""
          );
        }}
      </Media>
      <ul className={`nav-links ${navMenuToggle ? "responsive_nav" : ""}`}>
        {NavData.map((NavData, index) => (
          <AccordionItem
            key={index}
            i={index}
            data={NavData}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
        <Button text="Login" className="inverted no-border" />
        <Button text="Register" className="inverted" />
      </ul>
    </nav>
  );
};

export default MobileNavigation;
