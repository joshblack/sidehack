import React from 'react';

import { ProjectListItem } from '../ProjectListItem';

import from './ProjectList.scss';

export class ProjectList extends React.Component {
  render () {
    let Projects = [
      <ProjectListItem key="1" />,
      <ProjectListItem key="2" />,
      <ProjectListItem key="3" />
    ];

    return (
      <ul className="project-list">{Projects}</ul>
    );
  }
}
