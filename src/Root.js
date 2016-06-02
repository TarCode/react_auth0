import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/index';
//import ContactDetail from './components/ContactDetail';

import App from './components/App';

export default class Root extends Component {

  render() {
    return(
      <Router history={ this.props.history }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Index }/>
          {/*<Route path='/contact/:id' component={ ContactDetail }/>*/}
        </Route>
      </Router>
    );
  }
}
