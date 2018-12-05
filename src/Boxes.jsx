import React from 'react';
import './box.css'
export const Boxes = (props) => (
  <div className="box" style={{background: props.color}}></div>
)
export default Boxes;
