import React from 'react';
import sx from 'classnames';

import { Image } from '../Image';

import from './ProjectImage.scss';

export class ProjectImage extends React.Component {
  static propTypes = {
    alt: React.PropTypes.string,
    src: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    className: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ])
  }

  render () {
    return (
      <Image
        alt="Project Image"
        src={this.props.src}
        width={this.props.width}
        height={this.props.height}
        classNames={sx(["project-image", this.props.className])}
      />
    );
  }
}
