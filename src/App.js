import Navigation from "./components/navigation/navigation.component";
import Attribution from "./components/attribution/attribution.component";

import ImageHero from "./assets/image-hero-mobile.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <img src={ImageHero} alt="hero-img" />
      <div className="card">
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
      </div>
      <Attribution />
    </div>
  );
}

export default App;
