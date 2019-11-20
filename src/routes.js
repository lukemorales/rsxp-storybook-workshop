import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}
