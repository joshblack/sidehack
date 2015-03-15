import React from 'react';
import { color, italicFont } from './shared';

const Quote = React.createClass({
  render () {
    let style = {
      'fontFamily': italicFont,
      'fontStyle': 'italic',
      'fontSize': 24,
      'textAlign': 'center',
      color
    };

    return (
      <blockquote style={style}>{this.props.children}</blockquote>
    );
  }
});

export default Quote;
