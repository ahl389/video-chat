import './App.scss';
import FilterIcon from './FilterIcon'

function FilterMenu(props) {
  const filters = ['none', 'snowfall', 'green_red', 'twinkle'];
  return (
    <div className="filterMenu">
      { 
        filters.map(filter => <FilterIcon changeFilter={props.changeFilter} key={filter} name={filter}/>)
      }
    </div>
  );
}

export default FilterMenu;
