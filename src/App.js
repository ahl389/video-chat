import './App.scss';
import React, {Component} from 'react';
import Room from './Room';
const { connect, LocalDataTrack } = require('twilio-video');


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      identity: '',
      room: null
    }

    this.inputRef = React.createRef();

    this.joinRoom = this.joinRoom.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.updateIdentity = this.updateIdentity.bind(this);
    this.removePlaceholderText = this.removePlaceholderText.bind(this);
  }
  
  async joinRoom() {
    try {
      const response = await fetch(`https://backend-9288-dev.twil.io/token?identity=${this.state.identity}`);
      const data = await response.json();
      const room = await connect(data.accessToken, {
        name:'secret-santa4',
        audio: true,
        video: true,
        dominantSpeaker: true
      });

      const localDataTrack = new LocalDataTrack();
      await room.localParticipant.publishTrack(localDataTrack);

      this.setState({ room: room });
    } catch(err) {
      console.log(err);
    }
  }

  leaveRoom() {
    this.setState({ room: null });
  }

  updateIdentity(event) {
    this.setState({
      identity: event.target.value
    });
  }

  removePlaceholderText() {
    this.inputRef.current.placeholder = '';
  }

  render() {
    const disabled = this.state.identity == '' ? true : false;

    return (
      <div className="app">
        { 
          this.state.room === null
          ? <div className = "lobby">
              <input 
                ref={this.inputRef} 
                value={this.state.identity} 
                onClick={this.removePlaceholderText} 
                onChange={this.updateIdentity} 
                placeholder="What's your name?"/>
              <button disabled={disabled} onClick={this.joinRoom}>Join Room</button>
            </div>
          : <Room leaveRoom={this.leaveRoom} room={this.state.room} />
        }
      </div>
    );
  }
}

export default App;
