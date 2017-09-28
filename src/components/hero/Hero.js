import React, { Component } from 'react';
import './Hero.css';
import { Navbar, Jumbotron, Button, Well, Carousel } from 'react-bootstrap';
// import logo from './travel_hero.jpg';

class Hero extends Component {
  render() {
    return (
        <div className="heroContainer">
        <Carousel>
            <Carousel.Item>
            <img width="100%" height="600" alt="900x500" src="/images/city1.jpg"/>
            <Carousel.Caption>
                <h3>Toronto</h3>
                <p>Hey, this is in Canada.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img width="100%" height="600" alt="900x500" src="/images/city2.jpg"/>
            <Carousel.Caption>
                <h3>Houston</h3>
                <p>Good food and lots of land.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img width="100%" height="600" alt="900x500" src="/images/city3.jpg"/>
            <Carousel.Caption>
                <h3>New York</h3>
                <p>The city of living.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img width="100%" height="600" alt="900x500" src="/images/city4.jpeg"/>
            <Carousel.Caption>
                <h3>Miami</h3>
                <p>I love miami!</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}

export default Hero;