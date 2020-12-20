import './Twinkle.scss';
import React, {Component} from 'react';

export default class Twinkle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 30
    }

    // this.twinkle = React.createRef();
    // this.setHeight = this.setHeight.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.setHeight);
  // }

  // componentWillUmount() {
  //   window.removeEventListener('resize');
  // }

  // setHeight() {
  //   console.log('this is called')
  //   console.log(this.twinkle.current)
  //   const width = this.twinkle.current.width;
  //   console.log(width)
  //   const height = width * 3;
  //   this.setState({height: height})
  // }

  render() {
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
  
}