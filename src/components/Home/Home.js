import React from 'react';

import { Button } from '../Button';
import { Logo } from '../Typography';
import { PromoCopy } from './PromoCopy';
import { PromoUserList } from './PromoUserList';
import { css } from '../../helpers';

export const Home = React.createClass({
  getDefaultProps() {
    return {
      style: css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `
    }
  },

  render () {
    let loginStyle = css`
      align-self: flex-end;
      margin: 35px;
    `;

    return (
      <div style={this.props.style}>
        <Button style={loginStyle}>
          Login
        </Button>
        <Logo size="64px" />
        <PromoCopy/>
        <div>
          <Button>Learn More</Button>
          <Button>Sign Up</Button>
        </div>
        <PromoUserList count={18} />
      </div>
    );
  }
});
