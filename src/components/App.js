import React from 'react';

import Header from './Header';

export const App = React.createClass({
  render () {
    let baseStyles = {
      'width': '100%',
      'height': '100%'
    };

    return (
      <div style={baseStyles}>
        <Header/>
      </div>
    );
  }
});
