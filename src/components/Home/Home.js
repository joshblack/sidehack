import React from 'react';

import { Button } from '../Button';
import { Logo } from '../Typography';
import { PromoCopy } from './PromoCopy';
import { PromoUserList } from './PromoUserList';

import from './Home.css';

export class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Button className="btn--login">Login</Button>
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
}
