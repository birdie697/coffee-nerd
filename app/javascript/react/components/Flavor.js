import React from 'react';

const Flavor = props => {

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleRatedFlavor}
      >
        <option value="Underdeveloped">Underdeveloped</option>
        <option value="Good">Good</option>
        <option value="Bitter">Bitter</option>
      </select>
    </label>
  )
}

export default Flavor;
