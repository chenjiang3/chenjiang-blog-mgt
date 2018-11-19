import React, {Component} from 'react';

import Login from 'src/container/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const RouterList = [
  {
    component: Login,
    path: '/login',
  }
];

const RouterMap = () => {
  return (
    <Router>
      <Switch>
        {
          RouterList.map(item => (
            <Route
              key={item.path}
              exact={true}
              path={item.path}
              component={item.component}
            />
          ))
        }
      </Switch>
    </Router>
  )
};

export default RouterMap;