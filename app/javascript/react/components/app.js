import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';
import PreparationContainer from '../containers/PreparationContainer';
import Hello from './Hello';
import Overall from './Overall';
import Methods from './Methods';
import WaterCoffeeRatio from './WaterCoffeeRatio';
import GrindSize from './GrindSize';

export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={PreparationContainer} />
        <Route path="overall" component={Overall} />
        <Route path="methods" component={Methods} />
        <Route path="ratio" component={WaterCoffeeRatio} />
        <Route path="grind" component={GrindSize} />
      </Route>
    </Router>
  )
}

export default App
