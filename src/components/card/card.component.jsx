import "./card.styles.scss";

import Button from "../button/button.component";

import ImageHeroMobile from "../../assets/image-hero-mobile.png";
import ImageHeroDesktop from "../../assets/image-hero-desktop.png";

import Databiz from "../../assets/client-databiz.svg";
import Audiophile from "../../assets/client-audiophile.svg";
import Meet from "../../assets/client-meet.svg";
import Maker from "../../assets/client-maker.svg";

const Card = () => {
  return (
    <div className="card-container">
      <picture>
        <source media="(min-width: 768px)" srcset={ImageHeroDesktop} />
        <img className="hero-img" src={ImageHeroMobile} alt="hero-img" />
      </picture>
      {/* <div className="img"></div> */}
      <div className="card">
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button text="Learn more" />
        <div className="client-container">
          <img src={Databiz} alt="" />
          <img src={Audiophile} alt="" />
          <img src={Meet} alt="" />
          <img src={Maker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
