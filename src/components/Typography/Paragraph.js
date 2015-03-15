import React from 'react/addons';
import { color, bodyFont, italicFont } from './shared';

import Strong from './Strong';
import Emphasis from './Emphasis';

const Paragraph = React.createClass({
  render () {
    let style = {
      color,
      'fontFamily': bodyFont,
      'fontWeight': 'normal',
      'fontSize': 14,
      'width': 500,
      'lineHeight': 1.6
    };

    let children = React.Children.map(this.props.children, (child) => {
      let props = {
        'color': style.color,
        'fontSize': style.fontSize
      };

      if (child.type === Emphasis.type) {
        props['fontFamily'] = italicFont;

        return React.addons.cloneWithProps(child, props);
      }
      else if (child.type === Strong.type) {
        props['fontFamily'] = bodyFont;

        return React.addons.cloneWithProps(child, props);
      }
      else {
        return child;
      }

    });

    return (
      <div>
        <p style={style}>{children}</p>
      </div>
    );
  }
});

export default Paragraph;
