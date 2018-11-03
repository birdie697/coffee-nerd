import React from 'react';

const Strength = props => {

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.ratedStrength}
      >
        <option value="Good">Good</option>
        <option value="Strong">Strong</option>
        <option value="Weak">Weak</option>
      </select>
    </label>
  )
}

export default Strength;
