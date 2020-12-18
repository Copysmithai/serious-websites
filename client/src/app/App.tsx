import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import dfstyles from '../styles/dfstyles';
import styled from 'styled-components';
import LandingTemplate from './LandingTemplate';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:websiteId' component={LandingTemplate} />
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  color: ${dfstyles.colors.text};
  background: ${dfstyles.colors.backgrounddark};
`;

export default function _App() {
  return (
    <AppContainer>
      <App />
    </AppContainer>
  );
}
