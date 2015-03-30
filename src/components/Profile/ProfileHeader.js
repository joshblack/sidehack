import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { ProfileTitle } from './ProfileTitle';

import from './ProfileHeader.scss';

export class ProfileHeader extends React.Component {
  render () {
    return (
      <section className="profile-header">
        <ProfilePicture/>
        <ProfileTitle/>
      </section>
    );
  }
}
