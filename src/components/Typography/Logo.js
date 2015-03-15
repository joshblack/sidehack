import React from 'react';
import { color, titleFont } from './shared';

const Logo = React.createClass({
  getDefaultProps() {
    return {
      'size': 24
    };
  },

  render () {
    let base = {
      'display': 'inline-block',
      'fontFamily': 'Oswald',
      'fontWeight': '600',
      'fontSize': this.props.size
    };

    return (
      <h1 style={base}>
        <span>SIDE</span>
        <span style={{ color: '#6AEC7B' }}>HACK</span>
      </h1>
    );
  }
});

export default Logo;
