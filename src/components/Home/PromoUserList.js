import React from 'react';
import { PromoUser } from './PromoUser';
import { css } from '../../helpers';

let overlay = css`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 1;
`;

let promo = css`
  display: block;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 250px 0;
  z-index: 2;
  font-family: 'DroidSans';
  color: white;
  font-size: 48px;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.75);
`;

export const PromoUserList = React.createClass({
  propTypes: {
    'count': React.PropTypes.number.isRequired,
    'style': React.PropTypes.object
  },

  getDefaultProps() {
    return {
      style: css`
        display: flex;
        position: relative;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 1440px;
        padding: 0;
        overflow: hidden;
      `
    }
  },

  render() {
    let users = Array.from(
      new Array(this.props.count),
      (x, i) => <PromoUser key={i} user={i}/>
    );

    return (
      <ul style={this.props.style}>
        <li style={overlay}></li>
        <li style={promo}>Start Something Big</li>
        {users}
      </ul>
    );
  }
});
