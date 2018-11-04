


import React from 'react';
import { Link } from 'react-router';
import Strength from '../components/Strength'
import Flavor from '../components/Flavor'

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratedStrength: 'Good',
      ratedFlavor: 'Good'
    }
    this.handleRatedStrength = this.handleRatedStrength.bind(this)
    this.handleRatedFlavor = this.handleRatedFlavor.bind(this)
    this.handleResultsFormSubmit = this.handleResultsFormSubmit.bind(this)
  }

  handleRatedStrength(event) {
    this.setState({ ratedStrength: event.target.value })
  }

  handleRatedFlavor(event) {
    this.setState({ ratedFlavor: event.target.value })
  }

  handleResultsFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      user_id:  this.props.currentUserId,
      technique_id: this.props.techniqueId,
      coffee_id: this.props.coffeeId,
      servings: this.props.selectedServings,
      water_amount: this.props.waterWeight,
      coffee_amount: this.props.coffeeWeight,
      adjusted_ratio: this.props.adjustedRatio,
      strength: this.state.ratedStrength,
      adjusted_grind_size: this.props.adjustedGrindSize,
      flavor: this.state.ratedFlavor
    }

    let jsonPayload = JSON.stringify(formPayload)

    fetch(`/api/v1/preparations/?strength=${this.state.ratedStrength}&flavor=${this.state.ratedFlavor}`, {
      method: 'POST',
      body: jsonPayload,
      headers: {
        'Accept':  'application/json',
        'Content-Type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleResultsFormSubmit}>
          <h3>Here Are The Results</h3>
          <h4>UserId: {this.props.currentUserId}</h4>
          <h4>Servings: {this.props.servings}</h4>
          <h4>Technique: {this.props.techniqueName}</h4>
          <h4>Coffee: {this.props.coffeeName}</h4>
          <h4>Water (in grams): {this.props.waterWeight}</h4>
          <h4>Coffee (in grams): {this.props.coffeeWeight}</h4>
          <h4>Grind Size: {this.props.adjustedGrindSize}</h4>
          <h4>Ratio: {this.props.adjustedRatio}</h4>
          <h4>Rate The Strength</h4>
            <Strength
              content={this.state.ratedStrength}
              name="strength"
              handleRatedStrength={this.handleRatedStrength}
            />
          <h4>Rate The Flavor</h4>
            <Flavor
              content={this.state.ratedFlavor}
              name="flavor"
              handleRatedFlavor={this.handleRatedFlavor}
            />
          <div>
            <input className="secondary button form-button" type="submit" value="Save" />
            <button className="secondary button form-button" onClick={this.handleClear} >Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
export default ResultsContainer;
