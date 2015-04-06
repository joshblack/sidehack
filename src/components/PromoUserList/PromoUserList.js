import React from 'react';
import { PromoUser } from '../PromoUser';
import { css } from '../../helpers';

import promoUsers from './promoUsers';
import from './PromoUserList.scss';

// <li style={promo}>Start Something Big</li>

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
    'count': React.PropTypes.number.isRequired
  },

  render() {
    let users = Array.from(
      new Array(this.props.count),
      (x, i) => <PromoUser key={i} user={promoUsers[i]}/>
    );

    return (
      <ul className="promo-users__list">{users}</ul>
    );
  }
});
