import './Twinkle.scss';
import React, {Component} from 'react';

export default class Twinkle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 30
    }

    this.twinkle = React.createRef();
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.setHeight);
  }

  setHeight() {
    const width = this.twinkle.current.width;
    const height = width * 2;
    this.setState({height: height})
  }

  render() {
    return (
      <div className="filter twinkle" ref={this.twinkle}>
        { 
          Array(7).fill().map(light => {
            return (
              <div className="light" style={{height:this.state.height}}>
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
  
}