import React from "react";
import { Switch, Route, Link } from "react-router-dom"
import Home from './components/Home';
import HTMLDefinition from './components/HTMLDefinition';
import CSSDefinition from './components/CSSDefinition';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={HTMLDefinition} />
        <Route path="/css" component={CSSDefinition} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
