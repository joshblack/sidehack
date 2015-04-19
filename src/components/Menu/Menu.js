import React from 'react';
import API from '../../../lib/sidehack-client-api';
import { Link } from 'react-router';
import { Image } from '../Image';
import { FeedIcon, TasksIcon } from '../Icon';

import from './Menu.scss';

export class Menu extends React.Component {
  constructor () {
    this.state = { loading: true, projects: {} };
  }

  static contextTypes = {
    user: React.PropTypes.object.isRequired
  }

  async componentDidMount () {
    const { id } = this.context.user,
          { user } = await API.get('users', id);

    this.setState({ loading: false, projects: user.projects });
    console.log('changing state');
  }

  render () {
    const { user } = this.context;
    const projects = this.state.loading
      ? ''
      : this.state.projects.map((project) => {
          return (
            <Link to={`/auth/projects/${project.id}`}>
              <li className="menu--project-list-item">
                <Image
                  alt={project.name}
                  src={project.avatar_url}
                  width={25}
                  height={25}
                />
                <p>{project.name}</p>
              </li>
            </Link>
          );
        });

    console.log(this.state);
    return (
      <div className="menu">
        <div className="menu--container">
          <Link to="/">
            <Image alt="User Profile Picture"
                 src={user.avatar_url}
                 height={35}
                 width={35}
                 classNames="menu__user-picture"
            />
          </Link>
          <div className="menu--user-section">
            <Link to="/" className="menu--user-name">{user.name}</Link>
            <Link to="/" className="menu--edit-link">Edit Profile</Link>
          </div>
        </div>
        <ul className="menu--nav">
          <Link to="feed">
            <li className="menu--nav-link">
              <span>
                <FeedIcon className="menu--nav-icon" />
              </span>
              <p>Feed</p>
            </li>
          </Link>
          <Link to="tasks">
            <li className="menu--nav-link">
              <span>
                <TasksIcon className="menu--nav-icon menu--nav-icon__tasks" />
              </span>
              <p>Tasks</p>
            </li>
          </Link>
        </ul>
        <h4 className="menu--section-title">PROJECTS</h4>
        <ul className="menu--project-list">
          {projects}
        </ul>
      </div>
    );
  }
}
