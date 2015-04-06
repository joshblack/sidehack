import React from 'react';

import from './Logo.scss';

export class Logo extends React.Component {
  render () {
    return (
      <h1 className="site-logo">
        <span>SIDE</span>
        <span className="site-logo--accent">HACK</span>
      </h1>
    );
  }
}
