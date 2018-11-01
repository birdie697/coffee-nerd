import React from 'react';
import { Link } from 'react-router';
import Technique from '../components/Technique';
import Coffee from '../components/Coffee';

class PreparationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      techniques: [],
      coffees: [],
      selectedTechnique: '',
      selectedCoffee: ''
    }
    this.handleNewSelectedTechnique = this.handleNewSelectedTechnique.bind(this)
    this.handleNewSelectedCoffee = this.handleNewSelectedCoffee.bind(this)
  }

  handleNewSelectedTechnique(event) {
    this.setState({ selectedTechnique: event.target.value })
  }

  handleNewSelectedCoffee(event) {
    this.setState({ selectedCoffee: event.target.value })
  }

  componentDidMount(){
    fetch('api/v1/techniques')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ techniques: body });
    })
    .catch(error => console.error(`Error in fetch: $(error.message)`));

    fetch('api/v1/coffees')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ coffees: body });
    })
    .catch(error => console.error(`Error in fetch: $(error.message)`));

  }

  render() {

    return(
      <div>
        <form>
          <div className='selectionTile'>
            <h3>Pick a Technique</h3>
            <Technique
              techniques={this.state.techniques}
              content={this.state.selectedTechnique}
              name="technique"
              handleNewSelectedTechnique={this.handleNewSelectedTechnique}
              />
          </div>
          <div className='selectionTile'>
          <h3>Pick a Coffee</h3>
            <Coffee
              coffees={this.state.coffees}
              content={this.state.selectedCoffee}
              name="coffee"
              handleNewSelectedCoffee={this.handleNewSelectedCoffee}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default PreparationContainer;
