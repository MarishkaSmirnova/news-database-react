import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
                    from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return  (
      <Router>
        <div>
          <div className="header">
            <ul>
              <li><Link to="/newsDatabase/">Home</Link></li>
              <li><Link to="/newsDatabase/about">About</Link></li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/newsDatabase/" component={Home} />
            <Route path={'/newsDatabase/about'} exact component={About} />
            
            <Route path="*" component={NotFound} />
          </Switch>
      </div>
    </Router>);
  }
}

export default App;
