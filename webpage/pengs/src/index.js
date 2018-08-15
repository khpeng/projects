import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import createHashHistory from 'history/createHashHistory';

import Home from "./components/page/Home";
import Github from "./components/page/Github";
import Contact from "./components/page/Contact";
import Resume from "./components/page/Resume";

const app = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="github" name="Github" component={Github}></Route>
      <Route path="contact" name="Contact" component={Contact}></Route>
      <Route path="resume" name="Resume" component={Resume}></Route>
    </Route>
  </Router>,
  app );
