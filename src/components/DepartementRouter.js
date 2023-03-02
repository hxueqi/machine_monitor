import React, { useState } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import Page from './Page';
import MachineGrid from './MachineGrid';

function DepartmentRouter() {
  const [cardsView, setCardsView] = useState(1);

  return (
    <Router>
      <Switch>
        <Route
          path="/home"
          render={() => (
            <Page
              setCardsView={setCardsView}
              component={<MachineGrid cardsView={cardsView} />}
            />
          )}
        />
        <Route
          path="/:id"
          render={() => (
            <Page
              setCardsView={setCardsView}
              component={<MachineGrid cardsView={cardsView} />}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default DepartmentRouter;
