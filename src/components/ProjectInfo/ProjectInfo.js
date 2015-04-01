import React from 'react';
import { Link } from 'react-router';

import { Image } from '../Image';

import from './ProjectInfo.scss';

export class ProjectInfo extends React.Component {
  static propTypes = {
    project: React.PropTypes.shape({
      about: React.PropTypes.string.isRequired,
      members: React.PropTypes.array.isRequired
    }).isRequired
  }

  render () {
    const Members = this.props.project.members.map((member, i) => {
      return (
        <Link key={i} to="/">
          <li className="member-list__item">
            <Image
              alt="Member Profile Image"
              src={member.url}
              width={65}
              height={65}
            />
          </li>
        </Link>
      );
    });

    return (
      <section className="project-info">
        <section className="project-info__section">
          <header className="project-info__section-header">ABOUT</header>
          <p className="project-info__section-body">
            {this.props.project.about}
          </p>
        </section>
        <section className="project-info__section">
          <header className="project-info__section-header">TEAM</header>
          <ul className="project-info__member-list">{Members}</ul>
        </section>
      </section>
    );
  }
}
