import React from 'react';

const Coffee = props => {

  let coffees = props.coffees.map(coffee => {
    return (
      <option key={coffee.id} value={coffee.name}>{coffee.name}</option>
    )
  })

  return(
    <label>
      <select
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleNewSelectedCoffee}
      >
        {coffees}
      </select>
    </label>
  );
}

export default Coffee;
