import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, browserHistory, HashRouter } from 'react-router-dom';

import MainContainer from '../containers/MainContainer';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';

// main styles
import '../styles/index.scss';

const routes = (
  <HashRouter history={browserHistory}>
    <MainContainer>


      <Route path='/' component={HomeContainer}></Route>
      <Route path='/forecast/:id' component={ForecastContainer}></Route>
    </MainContainer>
  </HashRouter>
)

export default routes;
