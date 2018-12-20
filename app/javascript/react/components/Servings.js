import React from 'react';

const Servings = props => {


  let servings = [];

  servings.push(<option className='servingsTile' key="1" value="1">1 serving - 5 fluid ounces</option>);

  for (let i=1.5; i<=5; i+= 0.5) {
    servings.push(<option className='servingsTile' key={i} value={i}>{i} servings - {i*5} fluid ounces</option>);
  }

  for (let i=6; i<=14; i++) {
    servings.push(<option className='servingsTile' key={i} value={i}>{i} servings  - {i*5} fluid ounces</option>);
  }

  return(
    <label>
      <select
        className='servingsTile'
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
