import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Room from './Room';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      identity: '',
      room: null,
      inRoom: false
    }

    this.inputRef = React.createRef();

    this.joinRoom = this.joinRoom.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.updateIdentity = this.updateIdentity.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    const { connect } = require('twilio-video');
    this.setState({connect: connect});
  }

  updateIdentity(event) {
    this.setState({
      identity: event.target.value
    })
  }

  focusTextInput() {
    this.inputRef.current.placeholder = ''
  }
  
  async joinRoom() {
    try {
      const response = await fetch(`https://backend-9288-dev.twil.io/token?identity=${this.state.identity}`);
      const data = await response.json();
      const room = await this.state.connect(data.accessToken, {
        name:'secret-santa4',
        audio: true,
        video: { width: 640 } 
      });

      this.setState({ room: room, inRoom: true })
    } catch(err) {
      console.log(err)
    }
  }

  leaveRoom() {
    this.state.room.disconnect();
    this.setState({room: null, inRoom: false})
  }

  render() {
    return (
      <div className="app">
        { 
          ! this.state.inRoom
          ? <div className = "inactive">
              <input ref={this.inputRef} value={this.state.identity} onClick={this.focusTextInput} onChange={this.updateIdentity} placeholder="What's your name?"></input>
              {
                ! this.state.identity == ''
                ? <button onClick={this.joinRoom}>Join Room</button>
                : <button disabled onClick={this.joinRoom}>Join Room</button>
              }
            </div>
          : <div className = "active">
              <Room room={this.state.room} />
              <button id="leaveRoom" onClick={this.leaveRoom}>Leave Room</button>
            </div>
        }
      </div>
    );
  }
}

export default App;
