import './BlackWhite.scss';
import React, {Component} from 'react';

export default class BlackWhite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null
    }

    this.ref = React.createRef();
  }

  componentDidMount() {
    const grandparent = this.ref.current.parentElement.parentElement;
    const aunt = grandparent.querySelector('.video');
    const video = aunt.firstChild;
    video.style.webkitFilter = 'grayscale(100%)';
    this.setState({video:video});
  }

  componentWillUnmount() {
    this.state.video.style.webkitFilter = 'none';
  }

  render() {
    return (
      <div className="filter black_white" ref={this.ref}>
      </div>
    );
  }
}