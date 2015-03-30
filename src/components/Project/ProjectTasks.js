import React from 'react';

import { ProjectTask } from './ProjectTask';

import from './ProjectTasks.scss';

export class ProjectTasks extends React.Component {
  render () {
    const Tasks = this.props.tasks.map((task) => {
      return <ProjectTask task={task} />;
    });

    return (
      <div>
        <h4 className="project-tasks__title">Tasks</h4>
        <ul className="project-tasks">{Tasks}</ul>
      </div>
    );
  }
}
