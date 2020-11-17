import React, {Component} from 'react';
import './App.css';
import Track from './Track'


class Participant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tracks: []
    }

    this.addTrack = this.addTrack.bind(this);
  }

  componentDidMount() {
    const existingPublications = Array.from(this.props.participant.tracks.values());
    const existingTracks = existingPublications.map(publication => publication.track)
    this.setState({tracks: existingTracks});

    this.props.participant.on('trackSubscribed', track => this.addTrack(track));
  }


  addTrack(track) {
    this.setState({
      tracks: [...this.state.tracks, track]
    })
  }

  render() {
    return ( 
      <div className="participant" id={this.props.participant.identity}>
        <div className="identity">{ this.props.participant.identity}</div>
        { 
          this.state.tracks.length > 0 
          ? this.state.tracks.map(track => <Track key={track} owner={this.props.participant.identity} track={track}/>)
          : ''
        }
      </div>
    );
  }
}

export default Participant;
