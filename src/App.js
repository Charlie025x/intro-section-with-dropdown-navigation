import Navigation from "./components/navigation/navigation.component";
import Attribution from "./components/attribution/attribution.component";
import Button from "./components/button/button.component";

import Logo from "./assets/logo.svg";
import MenuIcon from "./assets/icon-menu.svg";

import ImageHero from "./assets/image-hero-mobile.png";

import Databiz from "./assets/client-databiz.svg";
import Audiophile from "./assets/client-audiophile.svg";
import Meet from "./assets/client-meet.svg";
import Maker from "./assets/client-maker.svg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div className="nav">
        <img className="logo" src={Logo} alt="logo" />
        <img className="menu-icon" src={MenuIcon} alt="menu icon" />
      </div>
      <div className="card-container">
        <img src={ImageHero} alt="hero-img" />
        <div className="card">
          <h2>Make remote work</h2>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button />
        </div>
      </div>

      <div className="client-container">
        <img src={Databiz} alt="" />
        <img src={Audiophile} alt="" />
        <img src={Meet} alt="" />
        <img src={Maker} alt="" />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
