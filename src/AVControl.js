import './App.scss';

function AVControl(props) {
  let icon;

  if (props.trackOff) {
    icon = props.type === 'audio' ? 'microphone-slash' : 'video-slash';
  } else {
    icon = props.type === 'audio' ? 'microphone' : 'video';
  }

  return (
    <div className="avControl">
      <i className={`fas fa-lg fa-${icon}`} onClick={() => props.toggleTrack()}></i>
    </div>
  );
}

export default AVControl;