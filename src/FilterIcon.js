import './App.scss';

function FilterIcon(props) {
  return (
    <div className={`icon icon-${props.name}`} onClick={ () => props.changeFilter(props.name) }>
      <img src={`${props.name}.png`} alt={`icon for ${props.name} filter`}/>
    </div>
  );
}

export default FilterIcon;
