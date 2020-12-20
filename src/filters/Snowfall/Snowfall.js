import './Snowfall.scss';

export default function Snowfall(props) {
  return (
    <div className="filter snowfall">
      { 
        Array(100).fill().map( (snowflake, index) => <div key={index} className="snowflake"></div>)
      }
    </div>
  );
}
