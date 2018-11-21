import React, {Component} from 'react';

import Login from 'src/container/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from 'src/container/AppPage';
import AddArticle from "src/container/AddArticle";
import Paths from "router/Paths";

const RouterList = [
  {
    component: Login,
    path: '/login',
  },
  {
    component: AddArticle,
    path: Paths.addArticle,
  }
];

const RouterMap = () => {
  return (
    <Router>
      <Switch>
        <App>
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
        </App>
      </Switch>
    </Router>
  )
};

export default RouterMap;