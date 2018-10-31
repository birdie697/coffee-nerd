import React from 'react';
import { Link } from 'react-router';
import Technique from '../components/Technique';
import Coffee from '../components/Coffee';

class PreparationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      techniques: [],
      coffees: []
    }
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
    let techniques = this.state.techniques.map(technique => {
      return(
        <Technique
          key={technique.id}
          technique={technique.name}
        />
      )
    })

    let coffees = this.state.coffees.map(coffee => {
      return(
        <Coffee
          key={coffee.id}
          coffee={coffee.name}
        />
      )
    })

    return(
      <div>


          <div className='selectionTile'>
            <h1>Pick a Technique</h1>
            {techniques}
          </div>
          <div className='selectionTile'>
            <h1>Pick a Coffee</h1>
            {coffees}
          </div>

      </div>
    )
  }
}

export default PreparationContainer;
