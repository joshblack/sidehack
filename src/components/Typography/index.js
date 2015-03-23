import { Component } from 'react';
import { css } from '../../helpers';

import { Logo } from './Logo';

import { MainTitle } from './MainTitle';
import { Subtitle } from './Subtitle';
import { SectionTitle } from './SectionTitle';
import { SectionSubheading} from './SectionSubheading';
import { Quote } from './Quote';
import { Intro } from './Intro';

import { Paragraph } from './Paragraph';
import { Emphasis } from './Emphasis';
import { Strong } from './Strong';

import {
  UnorderedList,
  OrderedList,
  ListItem } from '../Lists';

const container = css`
  width: 500px;
  margin: 100px auto;
`;

const center = css`
  display: block;
  text-align: center;
`;

const logo = Object.assign({}, center, css`
  font-size: 48px;
`);

export class Typography extends Component {
  render() {
    return (
      <div style={container}>
        <Logo style={logo}>Sidehack Typography</Logo>
        <MainTitle style={center}>Typography Guide</MainTitle>
        <Paragraph style={center}>A collection of styles for the typography used across sidehack.io</Paragraph>
        <MainTitle>h1 — Main Title</MainTitle>
        <Subtitle>h2 — Subtitle</Subtitle>
        <SectionTitle>h3 – Section Title</SectionTitle>
        <SectionSubheading>h4 – Section Subheading</SectionSubheading>
        <Quote style={center}>Typography is the craft of endowing human language with a durable visual form.
― Robert Bringhurst</Quote>
        <Intro>This an introduction text. It has a fixed size, and a fixed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</Intro>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <Strong>eiusmod tempor</Strong> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <Emphasis>cillum dolore</Emphasis> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>

        <SectionSubheading>Unordered List</SectionSubheading>
        <UnorderedList>
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
        </UnorderedList>

        <SectionSubheading>Ordered List</SectionSubheading>
        <OrderedList>
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
          <ListItem>List Item</ListItem>
        </OrderedList>
      </div>
    );
  }
}

export {
  Logo,
  MainTitle,
  Subtitle,
  SectionTitle,
  SectionSubheading,
  Quote,
  Intro,
  Paragraph,
  Emphasis,
  Strong
};
