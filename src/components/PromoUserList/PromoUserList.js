import React from 'react';
import sx from 'classnames';
import { PromoUser } from '../PromoUser';

import promoUsers from './promoUsers';
import from './PromoUserList.scss';

export class PromoUserList extends React.Component {
  constructor () {
    this.state = { count: 0 };
    this.userLoaded = this.userLoaded.bind(this);
  }

  static propTypes = {
    'count': React.PropTypes.number.isRequired
  }

  userLoaded () {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let users = Array.from(
      new Array(this.props.count),
      (x, i) => <PromoUser
                  key={i}
                  finishedLoading={this.userLoaded}
                  user={promoUsers[i]}
                />
    );

    let classNames = sx({
      'promo-users__list': true,
      'promo-users__list--loaded': this.state.count === this.props.count
    });

    return (
      <ul className={classNames}>
        {users}
      </ul>
    );
  }
};
