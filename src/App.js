// import React from 'react';
// import ListMenu from './components/list-menu/listMenu';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Videos from './components/videos/videos';
import Activities from './components/activity/activity'
import TopMenu from './components/top-menu/topMenu';
import Footer from './components/footer/footer';
import Channels from './components/channels/chanels';



class App extends Component {
  render() {
    return (
      <div className="background-primary">
        <div className="container">
          <Router>
            <div id="container">
              
            </div>
          </Router>
          <TopMenu />
          <div className="row margin-section">
            <div className="col-7">
              <Videos />
            </div>
            <div className="col-5">
              <Activities />
            </div>
          </div>
          <div className="row margin-section">
            
            <div className="col-5">
              <Channels />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
    );
  }
}

export default App;
