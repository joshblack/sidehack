import React from 'react';

import from './ProjectTask.scss';

export class ProjectTask extends React.Component {
  static propTypes = {
    task: React.PropTypes.string
  }

  render () {
    return (
      <li className="project-task">
        <p>{this.props.task}</p>
      </li>
    );
  }
}
