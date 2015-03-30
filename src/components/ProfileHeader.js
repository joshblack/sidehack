import React from 'react';
import { ProfilePicture } from './ProfilePicture';
import { ProfileTitle } from './ProfileTitle';

import { css } from '../helpers';

const section = css`
  position: relative;
  top: -125px;
  display: flex;
  justify-content: center;
`;

export class ProfileHeader extends React.Component {
  render () {
    return (
      <section style={section}>
        <ProfilePicture/>
        <ProfileTitle/>
      </section>
    );
  }
}
