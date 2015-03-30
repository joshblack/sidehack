import React from 'react';

import from './ProfileTitle.scss';

export class ProfileTitle extends React.Component {
  render () {
    return (
      <div className="profile-title">
        <h1 className="profile-title__heading">Elizabeth Rose</h1>
        <p className="profile-title__subtitle">Aspiring Front-End Developer</p>
      </div>
    );
  }
};
