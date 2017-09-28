import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button, Table } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import CountryCards from './components/countrycards/CountryCards';
import Tablerow from './components/tablerow/Tablerow';
import FooterNav from './components/footernav/Footernav';


class App extends Component {
  render() {
    return (
      <div className="App">       
        <Navigation />
        <Hero />
        <div className="row hero">
         <CountryCards imageUrl="/images/spain_flag.svg" h3="Spain" titleUrl="http://www.spain.info/en_US/" title="Spain Tourism Site" />
         <CountryCards imageUrl="/images/italy_flag.svg" h3="Italy" titleUrl="http://www.italia.it/en/home.html" title="Italy Tourism Site" />
         <CountryCards imageUrl="/images/aruba_flag.svg" h3="Aruba" titleUrl="http://www.arubatourism.com/" title="Aruba Tourism Site" />
         <CountryCards imageUrl="/images/chile_flag.svg" h3="Chile" titleUrl="http://chile.travel/en/" title="Chile Tourism Site" />
        </div>
        <Tablerow />
        <FooterNav />
      </div>
    );
  }
}

export default App;
