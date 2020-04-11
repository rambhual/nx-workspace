import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <App />
    </HashRouter>
  </BrowserRouter>,

  document.getElementById('root')
);
