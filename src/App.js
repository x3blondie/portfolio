import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Body from "./Body";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/portfolio">
            <Header active="portfolio" />
            <Portfolio />
          </Route>

          <Route path="/about">
            <Header active="about" />
            <About />
          </Route>

          <Route path="/">
            <Header active="home" />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
