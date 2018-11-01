import React from 'react';

const Technique = props => {

  let techniques = props.techniques.map(technique => {
    return (
      <option key={technique.id} value={technique.name}>{technique.name}</option>
    )
  })

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewSelectedTechnique}
      >
        {techniques}
      </select>
    </label>
  );
}

export default Technique;
