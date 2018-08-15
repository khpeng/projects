import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Navigation from "./components/pages/Navigation";
import Layout from "./components/Layout";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className = "App-logo" alt="logo" />
        </header>
        <p className="App-intro">
        <Navigation />
        </p>
      </div>
    );
  }
}

export default App;
