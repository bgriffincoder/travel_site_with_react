import React, { Component } from 'react';
import './Navigation.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header navbar-left">
                <a class="navbar-brand" href="#">My Travel Site</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Stuff</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;