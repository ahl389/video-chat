import React, {Component} from 'react';
import './App.scss';
import Filter from './Filter';

class Track extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.props.track) {
      if (this.props.track.kind !== 'data') {
        const child = this.props.track.attach();
        this.ref.current.classList.add(this.props.track.kind);
        this.ref.current.appendChild(child)
      } else {
        this.props.track.on('message', message => {
          this.setState({filter: message})
        });
      }
    } 
  }
  
  render() {
    return (
      <div className="track" ref={this.ref}>
        {
          this.props.track && this.props.track.kind === 'data'
          ? <Filter name={this.state.filter || this.props.filter} />
          : ''
        }
      </div> 
    )
  }
}

export default Track;
