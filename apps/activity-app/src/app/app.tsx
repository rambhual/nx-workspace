import React, { Fragment } from 'react';
import { Navigation } from '@my-organigation/navigation';
import './app.css';
export const App = () => {
  return (
    <Fragment>
      <Navigation />
      <span className="has-text-danger">@nrwl/nest</span>
    </Fragment>
  );
};

export default App;
