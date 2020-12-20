import React, {Component} from 'react';
import './App.scss';
import Filter from './Filter';
import AVControl from './AVControl';

class Track extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
      trackOff: false
    }

    this.ref = React.createRef();
    this.toggleTrack = this.toggleTrack.bind(this);
  }

  componentDidMount() {
    if (this.props.track) {
      if (this.props.track.kind !== 'data') {
        const child = this.props.track.attach();
        this.ref.current.classList.add(this.props.track.kind);
        this.ref.current.appendChild(child)
      } else {
        this.props.track.on('message', message => {

          if (this.state.filters.includes(message)) {
            this.setState({ filters: this.state.filters.filter(f => f !== message) });
          } else {
            this.setState({ filters: [...this.state.filters, message] });
          }
          //this.setState({filter: message})
        });
      }
    } 
  }

  toggleTrack() {
    console.log('toggling')
    if (this.state.trackOff) {
      this.props.track.enable();
    } else {
      this.props.track.disable();
    }

    this.setState({
      trackOff: !this.state.trackOff
    })
  }
  
  render() {
    const filters = this.props.local ? this.props.filters : this.state.filters;

    return (
      <div className="track" ref={this.ref}>
        {
          this.props.track && this.props.track.kind === 'data'
          ? filters.map(filter => <Filter name={filter} />)
          : ''
        }

        {
          this.props.local && this.props.track && this.props.track.kind !== 'data'
          ? <AVControl toggleTrack={this.toggleTrack} trackOff={this.state.trackOff} type={this.props.track.kind}/>
          : ''
        }
      </div> 
    )
  }
}

export default Track;
