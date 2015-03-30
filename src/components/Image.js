import React from 'react';
import sx from 'classnames';

export class Image extends React.Component {
  static propTypes = {
    alt: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    classNames: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  render () {
    return (
      <img alt={this.props.alt}
           src={this.props.src}
           height={this.props.height}
           width={this.props.width}
           className={sx(this.props.classNames)}
      />
    );
  }
}
