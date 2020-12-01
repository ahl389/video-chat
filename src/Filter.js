import './App.scss';


function Filter(props) {

  return (
    <div className={`filter ${props.name}`}>
      { 
        props.name == 'snowfall'
        ? Array(100).fill().map(snowflake => <div className="snowflake"></div>)
        : ''
      }

      { 
        props.name == 'twinkle'
        ? Array(25).fill().map(light => <div className="light"></div>)
        : ''
      }
    </div>
  );
}

export default Filter;
