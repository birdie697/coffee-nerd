import React from 'react';
import { Link } from 'react-router';
import Strength from '../components/Strength'
import Flavor from '../components/Flavor'

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratedStrength: '',
      ratedFlavor: ''
    }
    this.handleRatedStrength = this.handleRatedStrength.bind(this)
    this.handleRatedFlavor = this.handleRatedFlavor.bind(this)
  }

  handleRatedStrength(event) {
    this.setState({ ratedStrength: event.target.value })
  }

  handleRatedFlavor(event) {
    this.setState({ ratedFlavor: event.target.value })
  }

  render() {

    return(
      <div>
        <form>
          <h3>Here Are The Results</h3>
          <h4>Water  (in grams):  {this.props.water}</h4>
          <h4>Coffee (in grams):  {this.props.coffee}</h4>
          <h4>Grind Size:         {this.props.grindSize}</h4>
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
        </form>
      </div>
    )
  }
}
export default ResultsContainer;
