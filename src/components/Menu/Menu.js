import React from 'react';
import { Link } from 'react-router';
import { Image } from '../Image';
import { Icon } from '../Icon';

import from './Menu.scss';

export class Menu extends React.Component {
  render () {
    return (
      <div className="menu">
        <div className="menu--container">
          <Link to="/">
            <Image alt="User Profile Picture"
                 src="http://www.gravatar.com/avatar/def8d17129bf0913c9f0f133acc0f631.png?large"
                 height={35}
                 width={35}
                 classNames="menu__user-picture"
            />
          </Link>
          <div className="menu--user-section">
            <Link to="/" className="menu--user-name">Josh Black</Link>
            <Link to="/" className="menu--edit-link">Edit Profile</Link>
          </div>
        </div>
        <ul className="menu--nav">
          <Link to="/">
            <li className="menu--nav-link">
              <span>
                <Icon className="menu--nav-icon" src={require('../../icons/feed.svg')}/>
              </span>
              <p>Feed</p>
            </li>
          </Link>
          <Link to="/">
            <li className="menu--nav-link">
            <span><img className="menu--nav-icon" src={require('../../icons/tasks.svg')}/></span>
              <p>Tasks</p>
            </li>
          </Link>
        </ul>
        <h4 className="menu--section-title">PROJECTS</h4>
        <ul className="menu--project-list">
          <Link to="/">
            <li className="menu--project-list-item">
              <div className="demo--box"></div>
              <p>Hello Ruby</p>
            </li>
          </Link>
          <Link to="/">
            <li className="menu--project-list-item">
              <div className="demo--box"></div>
              <p>Sense</p>
            </li>
          </Link>
          <Link to="/">
            <li className="menu--project-list-item">
              <div className="demo--box"></div>
              <p>ElectroThrill</p>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
