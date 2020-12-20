// import './App.scss';
// import FilterIcon from './FilterIcon'

// function FilterMenu(props) {
//   const filters = ['None', 'Snowfall', 'GreenRed', 'Twinkle', 'BlackWhite'];

//   return (
//     <div className="filterMenu">
//       { 
//         filters.map(filter => <FilterIcon changeFilter={props.changeFilter} key={filter} name={filter}/>)
//       }
//     </div>
//   );
// }

// export default FilterMenu;


import './App.scss';

function FilterMenu(props) {
  const filters = [{name:'None', icon:'fa-ban'}, {name:'Snowfall', icon:'fa-snowflake'}, {name:'GreenRed', icon:'fa-holly-berry'}, {name:'Twinkle', icon:'fa-lights-holiday'}];

  return (
    <div className="filterMenu">
      { 
        filters.map(filter => 
          <div className={`icon icon-${filter.name}`} 
            onClick={ () => props.changeFilter(filter.name) }><i class={`fas fa-lg ${filter.icon}`}></i>
          </div>
        )
      }
    </div>
  );
}

export default FilterMenu;