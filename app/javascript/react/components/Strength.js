import React from 'react';

const Strength = props => {

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleRatedStrength}
      >
        <option value="Weak">Weak</option>
        <option value="Good">Good</option>
        <option value="Strong">Strong</option>
      </select>
    </label>
  )
}

export default Strength;
