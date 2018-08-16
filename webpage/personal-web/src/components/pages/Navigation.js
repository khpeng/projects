import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Home from "./Home";
import App from "../../App";


export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div className="nav-target">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./Resume">Resume</Link></li>    
                <li><Link to="./Contact">Contact</Link></li>
                <li> <a  href ="https://github.com/khpeng/projects" > Projects </a> </li>
                <li> <a  href ="https://github.com/khpeng/academic_project" > Academic Projects </a> </li>

              </ul>


              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Resume' component={Resume} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Contact' component={Contact} />
              </Switch>

          </div>
        </Router>
      </div>
    );
  }

}
