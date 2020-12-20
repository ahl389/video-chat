import './App.scss';
import FilterIcon from './FilterIcon'

function FilterMenu(props) {
  const filters = [
    {name:'Snowfall', icon:'fa-snowflake'}, 
    {name:'GreenRed', icon:'fa-holly-berry'}, 
    {name:'Twinkle', icon:'fa-lights-holiday'}
  ];

  return (
    <div className="filterMenu">
      { 
        filters.map(filter => <FilterIcon key={filter.name} filter={filter} changeFilter={props.changeFilter}/>)
      }
    </div>
  );
}

export default FilterMenu;