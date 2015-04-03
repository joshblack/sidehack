import React from 'react';

import { Header } from '../Header';
import { Banner } from '../Banner';
import { Menu } from '../Menu';
import { ProjectImage } from '../ProjectImage';
import { ProjectInfo } from '../ProjectInfo';
import { ProjectFeed } from '../ProjectFeed';

import from './Project.scss';

const mockName = 'Hello Ruby';
const mockSlogan = 'Teaching Children the Magic of Programming!';
const mockProject = {
  about: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur.',
  members: [
    {
      id: 1,
      url: 'http://placehold.it/65x65'
    },
    {
      id: 2,
      url: 'http://placehold.it/65x65'
    },
    {
      id: 3,
      url: 'http://placehold.it/65x65'
    }
  ]
};
const mockProjectID = 1;

export class Project extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Banner color="#F04665" />
        <div className="project-container">
          <Menu/>
          <section className="project">
            <header className="project-header">
              <ProjectImage
                src="http://placehold.it/175x175"
                width={175}
                height={175}
                className="project-image--large"
              />
              <div className="project-title">
                <h1 className="project-title__name">{mockName}</h1>
                <p className="project-title__subtitle">{mockSlogan}</p>
              </div>
            </header>
            <div className="project-content">
              <ProjectFeed id={mockProjectID} />
              <ProjectInfo project={mockProject} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
