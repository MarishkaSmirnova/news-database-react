import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
                    from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
// import NotFound from './NotFound';

class App extends Component {
  render() {
    return  (
      <Router>
        <div>
          <div className="header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={'/about'} exact component={About} />
            <Route> 404 Page Not Found</Route>
          </Switch>
      </div>
    </Router>);
  }
}

export default App;
