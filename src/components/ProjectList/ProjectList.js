import React from 'react';

import { Project } from '../Project';

import from './ProjectList.scss';

export class ProjectList extends React.Component {
  render () {
    let Projects = [
      <Project key="1" />,
      <Project key="2" />,
      <Project key="3" />
    ];

    return (
      <ul className="project-list">{Projects}</ul>
    );
  }
}
