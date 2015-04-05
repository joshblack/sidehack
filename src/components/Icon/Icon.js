import React from 'react';
import sx from 'classnames';

import from './Icon.scss';

function getSvgBody(svg) {
  return svg
    // remove xml prolog
    .replace(/<\?xml[\s\S]*?>/gi, "")
    // remove doctype
    .replace(/<!doctype[\s\S]*?>/gi, "")
    // remove comments
    .replace(/<!--[\s\S]*?-->/g, "")
    // remove hardcoded dimensions
    .replace(/width="\d+(\.\d+)?(px)?"/gi, "")
    .replace(/height="\d+(\.\d+)?(px)?"/gi, "")
    .trim()
}

export class Icon extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  }

  render () {
    return (
      <span
        className={sx(this.props.className, ['icon'])}
        title={this.props.title}
        dangerouslySetInnerHTML={{__html: getSvgBody(this.props.src)}}>
      </span>
    )
  }
}
