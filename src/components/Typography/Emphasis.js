import React from 'react';

const Emphasis = React.createClass({
  propTypes: {
    fontSize: React.PropTypes.number
  },

  getDefaultProps () {
    return { fontSize: 16 };
  },

  render () {
    let style = {
      'fontFamily': 'DroidSerif',
      'fontStyle': 'italic',
      'fontSize': this.props.fontSize
    };

    return (
      <em style={style}>{this.props.children}</em>
    );
  }
});

export default Emphasis;
