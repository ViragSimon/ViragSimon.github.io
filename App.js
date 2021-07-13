import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './src/Pages/Home';
import About from './src/Pages/About';
import Contact from './src/Pages/Contact';
import Education from './src/Pages/Education';
import Experience from './src/Pages/Experience';
import Projects from './src/Pages/Projects';
import Resume from './src/Pages/Resume';


class App extends Component {
  
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Education'} className="nav-link"> Education </Link></li>
            <li><Link to={'/Experience'} className="nav-link"> Experience </Link></li>
            <li><Link to={'/Projects'} className="nav-link"> Projects </Link></li>
            <li><Link to={'/Resume'} className="nav-link"> Resume </Link></li>
            <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/About'} className="nav-link">About</Link></li>
            
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Education' component={Education} />
              <Route exact path='/Experience' component={Experience} />
              <Route exact path='/Projects' component={Projects} />
              <Route exact path='/Resume' component={Resume} />
              <Route path='/Contact' component={Contact} />
              <Route path='/About' component={About} />
              
          </Switch>
        </div>
      </Router>
    );
  }
}
const rootElement = document.getElementById("root");

export default App;