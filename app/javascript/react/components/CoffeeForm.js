import React from 'react';

const CoffeeForm = props => {

  return (
    <div>
      <form onSubmit={props.handlePostToCoffee}>
        <h3>Add A Coffee</h3>
        <input
          type="text"
          placeholder="Something like....Whole Foods Morning Buzz"
          name="name"
          value={props.newCoffee}
          onChange={props.handleNewCoffee}
        />
        <div className="centerButtons">
          <button
            className="resultsButtons"
            type="submit"
            name="submit"
            value="Add New Coffee"
            >Add New Coffee
          </button>
          <button
            className="resultsButtons"
            onClick={props.handleCoffeeClear}
            >Clear Coffee
          </button>
        </div>
      </form>
    </div>
  )


}

export default CoffeeForm;
