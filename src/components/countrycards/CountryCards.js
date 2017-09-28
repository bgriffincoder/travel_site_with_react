import React, { Component } from 'react';
import './CountryCards.css';

class CountryCards extends Component {
  render() {
    return (
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
            <div class="card">
                <img src={this.props.imageUrl} class="img-responsive" />
                <div class="text-center">
                    <h3>{this.props.h3}</h3>
                    <a href={this.props.titleUrl} target="_blank">{this.props.title}</a>
                </div>
            </div>
        </div>      
    );
  }
}



export default CountryCards;


