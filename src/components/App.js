import React from 'react';

import {
  MainTitle,
  Subtitle,
  SectionTitle,
  Subheading,
  Quote,
  Intro,
  Paragraph,
  Strong,
  Emphasis } from './Typography';

export const App = React.createClass({
  render () {
    return (
      <div>
        <MainTitle>Main Title</MainTitle>
        <Subtitle>Subtitle</Subtitle>
        <SectionTitle>Section Title</SectionTitle>
        <Subheading>Section subheading</Subheading>
        <Quote>Typography is the craft of endowing human language with a durable visual form. ― Robert Bringhurst</Quote>
        <Intro>This an introduction text. It has a fixed size, and a fixed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</Intro>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <Strong>eiusmod tempor</Strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <Emphasis>cillum dolore</Emphasis> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
      </div>
    );
  }
});
