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
  const filters = ['None', 'Snowfall', 'GreenRed', 'Twinkle'];

  return (
    <div className="filterMenu">
      { 
        filters.map(filter => 
            <div 
              className={`icon icon-${filter}`} 
              onClick={ () => props.changeFilter(filter) }>{filter}
            </div>
        )
      }
    </div>
  );
}

export default FilterMenu;