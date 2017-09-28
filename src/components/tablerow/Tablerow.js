import React, { Component } from 'react';
import './Tablerow.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var countryInfo = [{
    dest: "Spain",
    capital: "Madrid",
    lang: "Spanish",
    pop: "46.77 million",
    bird: "Eagle"
}, {
    dest: "Italy",
    capital: "Rome",
    lang: "Italian",
    pop: "59.83 million",
    bird: "Bluebirds"
},{
    dest: "Aruba",
    capital: "Oranjestad",
    lang: "Dutch",
    pop: "102,911",
    bird: "Aruban Burrowing Owl"
},{
    dest: "Chile",
    capital: "Santiago",
    lang: "Spanish",
    pop: "17.62 million",
    bird: "Andean condor"
}];

class Tablerow extends Component {
    
  render() {
    return (
        <BootstrapTable data={countryInfo} headers={true} striped={true} hover={true} condensed= {true} search={true}>
            <TableHeaderColumn dataField='dest'isKey={ true }>Destination</TableHeaderColumn>
            <TableHeaderColumn dataField='capital'>Capital</TableHeaderColumn>
            <TableHeaderColumn dataField='lang'>Official Language</TableHeaderColumn>
            <TableHeaderColumn dataField='pop'>Population (aprox.)</TableHeaderColumn>
            <TableHeaderColumn dataField='bird'>National Bird</TableHeaderColumn>
        </BootstrapTable>  
    );
  }
}

export default Tablerow;