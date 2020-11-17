import React, {Component} from 'react';
import './App.css';
import Participant from './Participant';


class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: []
    }
  }

  componentDidMount() {
    // Get existing participants and add everyone, including local participants, to participant state
    const existingParticipants = Array.from(this.props.room.participants.values());
    this.setState({participants: [...existingParticipants, this.props.room.localParticipant]});

    // Add event listeneres for future participants coming or going
    this.props.room.on('participantConnected', participant => this.addParticipant(participant));
    this.props.room.on('participantDisconnected', participant => this.removeParticipant(participant));
  }

  componentWillUnmount() {
    this.props.room.disconnect();
  }

  addParticipant(participant) {
    console.log(`${participant.identity} has joined the room.`)

    this.setState({
      participants: [...this.state.participants, participant]
    })
  }

  removeParticipant(participant) {
    console.log(`${participant.identity} has left the room`)

    this.setState({
      participants: this.state.participants.filter(p => p.identity != participant.identity)
    })
  }

  render() {
    return (
      <div className="room">
        {
          this.state.participants.length > 0
          ? this.state.participants.map(participant => 
              <Participant key={participant.identity} participant={participant}/>
            )
          : ''
        }
      </div>
    );
  }

}

export default Room;
