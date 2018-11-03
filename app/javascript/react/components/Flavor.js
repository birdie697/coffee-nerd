import React from 'react';

const Flavor = props => {

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.ratedFlavor}
      >
        <option value="Good">Good</option>
        <option value="Bitter">Bitter</option>
        <option value="Underdeveloped">Underdeveloped</option>
      </select>
    </label>
  )
}

export default Flavor;
