import React from 'react';
import API from '../../../lib/sidehack-client-api';
import { Header } from '../Header';
import { Banner } from '../Banner';
import { Menu } from '../Menu';
import { ProjectImage } from '../ProjectImage';
import { ProjectInfo } from '../ProjectInfo';
import { ProjectFeed } from '../ProjectFeed';

import from './Project.scss';

const mockProjectID = 1;

export class Project extends React.Component {
  constructor () {
    this.state = {
      avatar: 'http://placehold.it/175x175',
      loading: true,
      project: {}
    }
  }

  static contextTypes = {
    router: React.PropTypes.func
  }

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.props.user };
  }

  async componentDidMount () {
    const { router } = this.context,
          { id } = router.getCurrentParams(),
          { project } = await API.get('projects', id);

    this.setState({ loading: false, project });
  }

  render () {
    if (this.state.loading) {
      return (
        <div className="auth-login">
          <div className="center">
            <div className="auth-loading" />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header/>
        <Banner color="#F04665" />
        <div className="project-container">
          <Menu/>
          <section className="project">
            <header className="project-header">
              <ProjectImage
                src={this.state.project.avatar_url}
                width={175}
                height={175}
                className="project-image--large"
              />
              <div className="project-title">
                <h1 className="project-title__name">
                  {this.state.project.name}
                </h1>
                <p className="project-title__subtitle">
                  {this.state.project.tagline}
                </p>
              </div>
            </header>
            <div className="project-content">
              <ProjectFeed id={mockProjectID} />
              <ProjectInfo project={this.state.project} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
