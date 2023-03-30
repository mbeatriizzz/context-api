import { AppContext, AppProvider } from "./context/AppContext";
import Time from "./components/Time";
import Greeting from "./components/Greeting";
import Phrase from "./components/Phrase";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <div className="top"></div>
        <div className="middle">
          <Time />
          <Greeting myName="Pessoa" />
        </div>
        <div className="bottom">
          <Phrase />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
