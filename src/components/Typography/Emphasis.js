import React from 'react';

const Emphasis = React.createClass({
  propTypes: {
    'fontFamily': React.PropTypes.string.isRequired,
    'fontSize': React.PropTypes.number.isRequired,
    'color': React.PropTypes.string.isRequired
  },

  render () {
    let style = {
      'color': this.props.color,
      'fontFamily': this.props.fontFamily,
      'fontSize': this.props.fontSize,
      'fontStyle': 'italic'
    };

    return (
      <em style={style}>{this.props.children}</em>
    );
  }
});

export default Emphasis;
