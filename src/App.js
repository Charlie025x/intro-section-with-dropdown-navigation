import Navigation from "./components/navigation/navigation.component";
import Card from "./components/card/card.component";
import Attribution from "./components/attribution/attribution.component";

import Logo from "./assets/logo.svg";
import MenuIcon from "./assets/icon-menu.svg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <div className="nav">
        <img className="logo" src={Logo} alt="logo" />
        <img className="menu-icon" src={MenuIcon} alt="menu icon" />
      </div> */}
      <Card />
      <Attribution />
    </div>
  );
}

export default App;
