import React from 'react';

import from './ProjectDesc.scss';

export class ProjectDesc extends React.Component {
  static propTypes = {
    text: React.PropTypes.string
  }

  render () {
    return (
      <p className="project-desc">{this.props.text}</p>
    );
  }
}
