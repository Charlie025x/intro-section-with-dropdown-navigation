import Navigation from "./components/navigation/navigation.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="card">
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://charlie-alonso.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Charlie Alonso
        </a>
        .
      </div>
    </div>
  );
}

export default App;
