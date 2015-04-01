import React from 'react';

import { ProjectList } from '../ProjectList';
import { TagList } from '../TagList';

import from './ProfileSection.scss';

const aboutMeText = `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.

Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. `

const dummyTags = ['JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'Web Development'];

export class ProfileSection extends React.Component {
  render () {
    return (
      <section>
        <article className="profile-article">
          <h1 className="profile-article__title">About Me</h1>
          <p className="profile-article__body">{aboutMeText}</p>
        </article>
        <article className="profile-article">
          <h1 className="profile-article__title">Projects</h1>
          <ProjectList/>
        </article>
        <article className="profile-article">
          <h1 className="profile-article__title">Interests</h1>
          <TagList tags={dummyTags} />
        </article>
      </section>
    );
  }
}
