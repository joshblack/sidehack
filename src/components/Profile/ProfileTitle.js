import React from 'react';
import { css } from '../../helpers';
import { text } from '../base';

const container = css`
  margin-left: 25px;
`;

const title = css`
  font-family: ${text.get('body').font};
  color: white;
`;

const subtitle = css`
  font-family: ${text.get('body').font};
  color: white;
`;

export class ProfileTitle extends React.Component {
  render () {
    return (
      <div style={container}>
        <h1 style={title}>Elizabeth Rose</h1>
        <p style={subtitle}>Aspiring Front-End Developer</p>
      </div>
    );
  }
};
