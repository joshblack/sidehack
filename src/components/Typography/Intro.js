import React from 'react';
import { color, bodyFont } from './shared';

const Intro = React.createClass({
  render () {
    let style = {
      'fontFamily': bodyFont,
      'fontWeight': 'normal',
      'fontSize': 18,
      'lineHeight': 1.65,
      color
    };

    return (
      <p style={style}>{this.props.children}</p>
    );
  }
});

export default Intro;
