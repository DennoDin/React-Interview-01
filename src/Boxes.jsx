import React, { Component } from 'react';
import './box.css'

class Boxes extends Component {
  render() {
    return (
      <div className="box" style={{background: this.props.color}}></div>
    );
  }
}

export default Boxes;
