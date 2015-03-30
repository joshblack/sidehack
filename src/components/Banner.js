import React from 'react';
import { css } from '../helpers';

const container = css`
  background: #F04665;
  width: 100%;
  height: 150px;
`;

export class Banner extends React.Component {
  render () {
    return (
      <div style={container}></div>
    );
  }
}
