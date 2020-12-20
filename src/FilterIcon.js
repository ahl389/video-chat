import './App.scss';
import React, { useState } from 'react';

function FilterIcon(props) {

  const [selected, setSelected] = useState(false);

  const toggleIcon = (name => {
    setSelected(!selected);
    props.changeFilter(name)
  });

  return (
    <div className={`icon icon-${selected} icon-${props.filter.name}`} onClick={ () => toggleIcon(props.filter.name) }>
      <i className={`fas fa-lg ${props.filter.icon}`}></i>
    </div>
  );
}

export default FilterIcon;
