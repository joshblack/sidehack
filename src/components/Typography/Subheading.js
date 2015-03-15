import React from 'react';
import { color, titleFont } from './shared';

const Subheading = React.createClass({
  render () {
    let style = {
      'fontFamily': titleFont,
      'fontWeight': 'bold',
      'fontSize': 20,
      color
    };

    return (
      <h3 style={style}>{this.props.children}</h3>
    );
  }
});

export default Subheading;
