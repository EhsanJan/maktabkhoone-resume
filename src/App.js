import FirstPage from "./Section/FirstPage";
import SecondPage from "./Section/SecondPage";
import Skills from "./Section/Skills";
import Nav from "./components/Nav";
import Brush from "./components/Brush";
import Arrow from "./components/Arrow";
import "./App.css";
import "./Section/Skills.css";

function App() {
  return (
    <div className="App">
      <Brush />
      <Arrow />
      <Nav />
      <FirstPage />
      <SecondPage />
      <Skills />
    </div>
  );
}

export default App;
