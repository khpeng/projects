import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tittle from "./components/Header/Tittle";
import { Link } from "react-router-dom";

class App extends React.Component {
  navigate () {
    this.props.history.pushState(null, "/");
  }
  render() {
    return (
      <div className="App">
        <h1> Shengwei Peng</h1>
        {this.props.children}
        <Link to="github"> <button> Github</button></Link>
        <Link to="resume"> Resume </Link>
        <Link to="contact"> Contact </Link>
        <button onClick={this.navigate.bind(this)}> Home</button>

      </div>
    );
  }
}

export default App;
