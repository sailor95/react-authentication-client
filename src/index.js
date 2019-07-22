import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './component/App';
import Welcome from './component/Welcome';
import Signup from './component/auth/Signup';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);