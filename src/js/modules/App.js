// modules/App.js
import React from 'react';
import { IndexLink } from 'react-router'
import NavLink from './NavLink';
import About from './About';
import {  nav, ul, li} from 'react-bootstrap';

export default class App extends React.Component{
  render() {
    return (
      <div>
      <nav class="navbar navbar-inverse bg-inverse navbar-collapse collapse">
        <div class="container-fluid">
          <div class="navbar-header">
            <h4>Palak Bhojani</h4>
          </div>
            <ul class="nav navbar-nav" role="nav">
              <li><NavLink to="/" onlyActiveOnIndex={true}>About</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/education">Education</NavLink></li>
              <li><NavLink to="/skills">Skills</NavLink></li>
              <li><NavLink to="/portfolios">Portfolios</NavLink></li>
            </ul>
        </div>
    </nav>

        {/* add this */}
        {this.props.children || <Home />}
      </div>
    );
  }
}