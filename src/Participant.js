import React, {Component} from 'react';
import './App.scss';
import Track from './Track';
import FilterMenu from './FilterMenu';

class Participant extends Component {
  constructor(props) {
    super(props);

    const existingPublications = Array.from(this.props.participant.tracks.values());
    const existingTracks = existingPublications.map(publication => publication.track);
    const nonNullTracks = existingTracks.filter(track => track !== null)

    this.state = {
      tracks: nonNullTracks,
      filter: 'None' 
    }

    this.changeFilter = this.changeFilter.bind(this);
  }

  componentDidMount() {
    if (!this.props.localParticipant) {
      // when someone subscribes to one a new remote participants audio or video tracks (subscription by local participant happens automatically)
      this.props.participant.on('trackSubscribed', track => this.addTrack(track));
      // when a remote participant joins the room and publishes a new data track
      this.props.participant.on('trackPublished', publication => this.addTrack(publication.track));
    }
  }

  addTrack(track) {
    this.setState({
      tracks: [...this.state.tracks, track]
    });
  }

  changeFilter(filter) {
    const dataTrack = this.state.tracks.find(track => track.kind == "data");
    dataTrack.send(filter);
    this.setState({ filter: filter });
  }

  render() {
    const isDominantSpeaker = this.props.dominantSpeaker === this.props.participant.identity ? 'dominantSpeaker' : '';

    return ( 
      <div className={`participant ${isDominantSpeaker}`} id={this.props.participant.identity}>
        <div className="identity">{ this.props.participant.identity}</div>
        {
          this.props.localParticipant
          ? <FilterMenu changeFilter={this.changeFilter} />
          : ''
        }
        
        { 
          this.state.tracks.map(track => 
            <Track key={track} filter={this.state.filter} local={this.props.localParticipant} track={track}/>)
        }
      </div>
    );
  }
}

export default Participant;
