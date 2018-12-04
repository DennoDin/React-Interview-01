import React, { Component } from 'react';
import './App.css';
import randomColors from './arrayfile.jsx'
import Boxes from './Boxes.jsx'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { //probably doesn't need state
      colors: randomColors()
    }
  }

  renderBoxes = () => {
    
    return this.state.colors.map( (x, index) => <Boxes key={index} color={x}/>)
  }
  render() {
    return (
      <div>
        <h1>This creates 100 boxes of random colors</h1>
        <div className="boxContainer">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
