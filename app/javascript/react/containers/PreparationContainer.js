import React from 'react';
import { Link } from 'react-router';
import Technique from '../components/Technique';
import Coffee from '../components/Coffee';
import Servings from '../components/Servings';
import ResultsContainer from './ResultsContainer';

class PreparationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      techniques: [],
      coffees: [],
      selectedTechniqueId: '',
      selectedCoffeeId: '',
      selectedServings: 1,
      currentUserId: '',
      resultsPayload: {}
    }
    this.handleNewSelectedTechnique = this.handleNewSelectedTechnique.bind(this)
    this.handleNewSelectedCoffee = this.handleNewSelectedCoffee.bind(this)
    this.handleNewSelectedServings = this.handleNewSelectedServings.bind(this)
    this.handlePrepFormSubmit = this.handlePrepFormSubmit.bind(this)
  }

  handleNewSelectedTechnique(event) {
    this.setState({ selectedTechniqueId: event.target.value })
  }

  handleNewSelectedCoffee(event) {
    this.setState({ selectedCoffeeId: event.target.value })
  }

  handleNewSelectedServings(event) {
    this.setState({ selectedServings: event.target.value })
  }

  handlePrepFormSubmit(event) {
    event.preventDefault()
    fetch(`/api/v1/preparations/?technique=${this.state.selectedTechniqueId}&coffee=${this.state.selectedCoffeeId}&servings=${this.state.selectedServings}`)
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
      this.setState({ resultsPayload: body });
    })
    .catch(error => console.error(`Error in fetch: $(error.message)`));
  }

  componentDidMount(){
    fetch('/api/v1/techniques')
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

    fetch('/api/v1/coffees')
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

    fetch('/api/v1/users')
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
      this.setState({ currentUser: body.id });
    })
    .catch(error => console.error(`Error in fetch: $(error.message)`));

  }

  render() {

    return(
      <div>
        <form onSubmit={this.handlePrepFormSubmit}>
          <div className='selectionTile'>
            <h3>Pick a Technique</h3>
            <Technique
              techniques={this.state.techniques}
              content={this.state.selectedTechniqueId}
              name="technique"
              handleNewSelectedTechnique={this.handleNewSelectedTechnique}
            />
          </div>
          <div className='selectionTile'>
            <h3>Pick a Coffee</h3>
              <Coffee
                coffees={this.state.coffees}
                content={this.state.selectedCoffeeId}
                name="coffee"
                handleNewSelectedCoffee={this.handleNewSelectedCoffee}
              />
          </div>
          <div className='selectionTile'>
            <h3>Pick Your Number of Servings</h3>
              <Servings
                content={this.state.selectedServings}
                name="servings"
                handleNewSelectedServings={this.handleNewSelectedServings}
              />
          </div>
          <div className='goButton'>
            <p>Brew Coffee</p>
            <input type="submit" name="submit" value="Click For Results" />
          </div>
        </form>
        <div className='selectionTile'>
          <ResultsContainer
            coffee={this.state.resultsPayload.coffee}
            water={this.state.resultsPayload.water}
            grindSize={this.state.resultsPayload.grind_size}
          />
        </div>
      </div>
    )
  }
}

export default PreparationContainer;
