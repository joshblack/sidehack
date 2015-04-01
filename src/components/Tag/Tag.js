import React from 'react';

export class Tag extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  render () {
    return (
      <li className={this.props.className}>
        {this.props.title}
      </li>
    );
  }
}
