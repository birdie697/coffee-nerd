import React from 'react';

const Servings = props => {


  let servings = []

  for (let i=1; i<=5; i+= 0.5) {
    servings.push(<option key={i} value={i}>{i}</option>);
  }

  for (let i=6; i<=14; i++) {
    servings.push(<option key={i} value={i}>{i}</option>);
  }

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewSelectedServings}
      >
        {servings}
      </select>
    </label>
  );
}

export default Servings;
