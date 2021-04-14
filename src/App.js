import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Timer from './components/timer/index.js';

const title = "Timer";

class App extends Component {
  state = {
    initalValue: 100,
    interval : setInterval(() => {
      this.decreaseTimer()
    }, 1000)
  }
  componentDidMount(){
    this.state.interval
  }
  decreaseTimer = () => {
   
    this.setState({initalValue : this.state.initalValue - 1})
    if(this.state.initalValue === 0) {
      this.stopTimer()
    }
  }
  stopTimer = () => {
    clearInterval(this.state.interval)
    console.log(this.state.initalValue)
  }
  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <img alt="" src={logo} className="logo"/>
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <Timer initalValue={this.state.initalValue} stopTimer={this.stopTimer} />
      </div>
    );
  }
}

export default App;
