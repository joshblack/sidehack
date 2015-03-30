import React from 'react';

import { ProjectImage } from './ProjectImage';
import { ProjectDetails } from './ProjectDetails';
import { ProjectDesc } from './ProjectDesc';
import { ProjectTasks } from './ProjectTasks';

import from './Project.scss';

const dummyProjectDesc = `Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas.
`;

const dummyTasks = [
  'Mauris accumsan eros eget libero posuere vulputate',
  'Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.',
  'Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.'
];

export class Project extends React.Component {
  render () {
    return (
      <section className="project">
        <header className="project-header">
          <ProjectImage
            src="http://placehold.it/45x45"
            width={45}
            height={45}
          />
          <ProjectDetails
            name="Hello Ruby"
            startDate="March 2014"
            endDate="December 2014"
          />
        </header>
        <ProjectDesc text={dummyProjectDesc} />
        <ProjectTasks tasks={dummyTasks} />
      </section>
    );
  }
}
