import React from 'react';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Input } from '../Input';
import from './ProjectForm.scss';

export class ProjectForm extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  }

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.props.user };
  }

  handleOnSubmit (e) {
    e.preventDefault();

    // TODO: Handle submit of project information
    // TODO: Input validations
  }

  render () {
    return (
      <div>
        <Header/>
        <section className="project-form__container">
          <section className="project-form__menu">
            <Menu/>
          </section>
          <section className="project-form">
            <header className="project-form__header">
              <h1 className="project-form__header-title">
                Create a New Project
              </h1>
              <p className="project-form__header-text">
                In this form, you have the ability to enter in information about your new project! Fill out the fields below and see a preview of your project card appear on the right hand side. At the end, once you're satisfied with the information you've entered, hit submit and your project will be saved!
              </p>
            </header>
            <form onSubmit={this.handleOnSubmit}>
              <section className="project-form__title">
                <Input name="project-title"
                       type="text"
                       label="Project Title"
                />
              </section>
              <section className="project-form__slogan">
                <Input name="project-slogan"
                       type="text"
                       label="Project Slogan"
                />
              </section>
              <section className="project-form__logo">
                  <Input name="project-logo"
                         type="text"
                         label="Project Logo URL"
                  />
              </section>
              <section className="project-form__description">
                <span className="input">
                  <label htmlFor="project-description"
                         className="project-description__label"
                  >
                    Project Description
                  </label>
                  <textarea rows="5" className="project-description__textarea" />
                </span>
              </section>
              <section className="project-form__contact">
                <h3 className="project-form__section-title">
                  Project Contact information
                </h3>
                  <Input name="project-site"
                         type="text"
                         label="Project Site URL"
                  />
                  <Input name="project-github-url"
                         type="text"
                         label="Project GitHub URL"
                  />
              </section>
              <section className="project-form__tags">
                  <Input name="project-tags"
                         type="text"
                         label="Project Tags"
                  />
              </section>
              <button type="submit" className="project-form__submit">
                Submit
              </button>
            </form>
          </section>
          <section className="project-form__project-card">
          </section>
        </section>
      </div>
    );
  }
}
