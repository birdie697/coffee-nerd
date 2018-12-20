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
      servings: this.props.servings,
      water_amount: this.props.waterWeight,
      coffee_amount: this.props.coffeeWeight,
      adjusted_ratio: this.props.adjustedRatio,
      strength: this.state.ratedStrength,
      adjusted_grind_size: this.props.adjustedGrindSize,
      flavor: this.state.ratedFlavor
    }
    this.props.postToPreparation(formPayload);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleResultsFormSubmit}>
          <h3>Here Are The Results</h3>
          <h4>Servings: {this.props.servings}</h4>
          <h4>Fluid Ounces: {this.props.servings*5}</h4>
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
          <div className="centerButtons">
            <button className="resultsButtons" type="submit" value="Save">Save</button>
            <button className="resultsButtons" onClick={this.props.handleClear}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
export default ResultsContainer;
