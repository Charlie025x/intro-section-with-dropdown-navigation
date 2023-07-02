import Navigation from "./components/navigation/navigation.component";
import Card from "./components/card/card.component";
import Attribution from "./components/attribution/attribution.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Card />
      <Attribution />
    </div>
  );
}

export default App;
