import react from "react";
import Home from './components/Home';
import Login from './components/Login';
import Bark from './components/Bark';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink exact to ="/">Home</NavLink></li>
          <li><NavLink to="/bark">Bark</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/bark" component={Bark} />
        <Route exact path="/login" component={Login} />
      </div>
    </HashRouter>
    
  );
}

export default App;
