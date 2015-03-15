import React from 'react';
import { color, titleFont } from './shared';

const MainTitle = React.createClass({
  render () {
    let style = {
      'fontFamily': titleFont,
      'fontWeight': 'bold',
      'fontSize': 32,
      color
    };

    return (
      <h1 style={style}>{this.props.children}</h1>
    );
  }
});

export default MainTitle;
