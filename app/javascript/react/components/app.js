import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';
import PreparationContainer from '../containers/PreparationContainer';

export const App = (props) => {

  return(

    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <Route path="users" component={PreparationContainer} />
      </Route>
    </Router>
  )
}

export default App
