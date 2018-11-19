import React, {Component} from 'react';

import Login from 'src/container/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const RouterList = [
  {
    component: Login,
    path: '/login',
  }
];

