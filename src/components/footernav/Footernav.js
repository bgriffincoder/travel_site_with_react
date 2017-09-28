import React, { Component } from 'react';
import './Footernav.css';

class FooterNav extends Component {
  render() {
    return (
      <div className="spacing">
        <nav className="footer navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
                <div className="navbar-header navbar-left">
                <a className="navbar-brand" href="#">&copy; Travel is fun</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default FooterNav;