import React from 'react';
import Router from 'react-router';
import routes from './routes';

import from 'core-js';
import from 'babel-core/polyfill';

window.React = React;

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.querySelector('#app'));
});
