import React from 'react';
import ReactDOM from 'react-dom';
import { RootPhone } from './root/phone';
import { Provider } from "react-redux";
import store from './store/Main'
import { BrowserRouter } from "react-router-dom";
import './GlobalStyle.css'
import './i18n/main'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store} >
          <RootPhone/>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
