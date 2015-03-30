import React from 'react';
import { Link } from 'react-router';
import { Image } from '../Image';

import from './Menu.css';

export class Menu extends React.Component {
  render () {
    return (
      <div className="menu">
        <div className="menu--container">
          <Image alt="User Profile Picture"
                 src="http://www.gravatar.com/avatar/def8d17129bf0913c9f0f133acc0f631.png?large"
                 height={35}
                 width={35}
          />
          <div className="menu--user-section">
            <Link to="/" className="menu--user-name">Josh Black</Link>
            <Link to="/" className="menu--edit-link">Edit Profile</Link>
          </div>
        </div>
        <ul className="menu--nav">
          <li className="menu--nav-link">
            <span><img className="menu--nav-icon" src={require('../../icons/feed.svg')}/></span>
            <a href="#">Feed</a>
          </li>
          <li className="menu--nav-link">
          <span><img className="menu--nav-icon" src={require('../../icons/tasks.svg')}/></span>
            <a href="#">Tasks</a>
          </li>
        </ul>
        <h4 className="menu--section-title">PROJECTS</h4>
        <ul className="menu--project-list">
          <li className="menu--project-list-item">
            <div className="demo--box"></div>
            <a href="#">Hello Ruby</a>
          </li>
          <li className="menu--project-list-item">
            <div className="demo--box"></div>
            <a href="#">Sense</a>
          </li>
          <li className="menu--project-list-item">
            <div className="demo--box"></div>
            <a href="#">ElectroThrill</a>
          </li>
        </ul>
      </div>
    );
  }
}
