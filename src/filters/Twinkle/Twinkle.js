import './Twinkle.scss';
import React, {Component} from 'react';

export default function Twinkle() {
  return (
    <div className="filter twinkle">
      { 
        Array(7).fill().map(light => {
          return (
            <div className="light" >
              <div className="fixture"></div>
              <div className="bulb"></div>
              <div className="string"></div>
            </div>
          )
        })
      }
    </div>
  );
}