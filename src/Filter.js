import './App.scss';
import * as componentMap from './filters';

function Filter(props) {
  const Filter = componentMap[props.name]
  return <Filter/>
}

export default Filter;
