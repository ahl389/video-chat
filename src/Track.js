import React, {Component} from 'react';
import './App.scss';


class Track extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.props.track != null) {
      this.ref.current.appendChild(this.props.track.attach())
    }
  }
  
  render() {
    return (
      <div className="track" ref={this.ref}></div> 
    )
  }
}

export default Track;
