import React from 'react';
import { Link } from 'react-router';
import { Image } from '../Image';
import { FeedIcon, TasksIcon } from '../Icon';

import from './Menu.scss';

export class Menu extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object.isRequired
  }

  render () {
    const { user } = this.context;
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
          <Link to="/">
            <li className="menu--nav-link">
              <span>
                <FeedIcon className="menu--nav-icon" />
              </span>
              <p>Feed</p>
            </li>
          </Link>
          <Link to="/">
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
          <Link to="/">
            <li className="menu--project-list-item">
              <Image
                alt="Project List Item Picture"
                src="http://placehold.it/25x25"
                width={25}
                height={25}
              />
              <p>Hello Ruby</p>
            </li>
          </Link>
          <Link to="/">
            <li className="menu--project-list-item">
              <Image
                alt="Project List Item Picture"
                src="http://placehold.it/25x25"
                width={25}
                height={25}
              />
              <p>Sense</p>
            </li>
          </Link>
          <Link to="/">
            <li className="menu--project-list-item">
              <Image
                alt="Project List Item Picture"
                src="http://placehold.it/25x25"
                width={25}
                height={25}
              />
              <p>ElectroThrill</p>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
