import React from 'react';
import { color, titleFont } from './shared';

const Subtitle = React.createClass({
  render () {
    let style = {
      'fontFamily': titleFont,
      'fontWeight': '200',
      'fontSize': 30,
      color
    };

    return (
      <h2 style={style}>{this.props.children}</h2>
    );
  }
});

export default Subtitle;
