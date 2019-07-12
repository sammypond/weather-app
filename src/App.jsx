import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Weather extends Component {


  state = {
    temp: '',
    condition: '',
    zipcode: '',
    location: ''
  }

  handleChange = (event) => {
    this.setState({zipcode: event.target.value});
    console.log('Your zip code is' + this.state.zipcode);
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip='+ this.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98')
    .then( result => {
    let temp = result.data.main.temp;
    let location = result.data.name;
    let condition = result.data.weather[0].main;
    console.log(result);
    this.setState({
        temp,
        location,
        condition
    })
    })
    // Your fetch here
    // Your state updates go under function(json)
  }

  render() {
    let temp = this.state.temp ? ((9/5 * (parseInt(this.state.temp) -273)) + 32).toFixed(2) : '';
    let location = this.state.location;
    let condition = this.state.condition;
    return (
      <div id="main">
        <form onSubmit={this.handleSubmit}>
        <p>
        </p>
        <label>
          <input type="text" onChange={this.handleChange} />
        </label>
        <input id="getweather" type="submit" value="Get my forecast!" />
        <h2>{location}</h2>
        <h2>{temp}</h2>
        <h2>{condition}</h2>
      </form>
      </div>
    )
  }
}


export default Weather;