import React from 'react';
import { Link } from 'react-router';

import { Button } from '../Button';
import { Logo } from '../Logo';
import { PromoCopy } from './PromoCopy';
import { PromoUserList } from '../PromoUserList';

import from './Home.scss';

export class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Link to="/" className="btn__login">
          <Button className="btn__home">Login</Button>
        </Link>
        <Logo />
        <PromoCopy/>
        <div className="promo-buttons">
          <Link to="/"><Button className="btn__home">Learn More</Button></Link>
          <a href="http://localhost:8000/auth/github">
            <Button className="btn__home">Sign Up</Button>
          </a>
        </div>
        <PromoUserList count={20} />
      </div>
    );
  }
}
