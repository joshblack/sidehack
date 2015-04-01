import React from 'react';

import from './Banner.scss';

export class Banner extends React.Component {
  static propTypes = {
    color: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <section
        className="banner"
        style={{ background: this.props.color }}
      />
    );
  }
}
