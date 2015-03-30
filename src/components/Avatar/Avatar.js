import React from 'react';
import { Image } from '../Image';
import from './Avatar.scss';

export class Avatar extends React.Component {
  static propTypes = {
    url: React.PropTypes.string
  }

  static defaultProps = {
    url: 'http://placehold.it/35x35'
  }

  render () {
    return (
      <div className="avatar">
        <Image
          alt="User Profile Picture"
          src={this.props.url}
          height={35}
          width={35}
          classNames="avatar__img"
        />
      </div>
    );
  }
}
