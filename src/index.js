import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import store from './redux/store';
import './index.less';

import RouterMap from "router/RouteMap";

renderWithHotReload(RouterMap);

if (module.hot) {
  module.hot.accept('src/components/App/App', () => {
    const NextApp = require('src/components/App/App').default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootElement/>
      </Provider>
    </AppContainer>,
    document.getElementById('app'));
};