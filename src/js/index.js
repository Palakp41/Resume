import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './modules/App';
import Education from './modules/Education';
import Portfolios from './modules/Portfolios';
import Experience from './modules/Experience';
import About from './modules/About';
import Skills from './modules/Skills';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={About} />
      <Route path="/portfolios" component={Portfolios}/>
      <Route path="/experience" component={Experience}/>
      <Route path="/education" component={Education}/>
      <Route path="/skills" component={Skills}/>
    </Route>
  </Router>
), document.getElementById('app'));