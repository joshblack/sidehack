import React from 'react';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Input } from '../Input';
import API from '../../../lib/sidehack-client-api';
import from './ProjectForm.scss';

export class ProjectForm extends React.Component {
  constructor () {
    this.state = { values: {} };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static contextTypes = {
    router: React.PropTypes.func
  }

  static childContextTypes = {
    user: React.PropTypes.object
  }

  getChildContext () {
    return { user: this.props.user };
  }

  async handleOnSubmit (e) {
    e.preventDefault();

    const { user } = this.props;
    const { values } = this.state;
    const { router } = this.context;

    if (values) {

      const newProject = Object.keys(values).reduce((o, v) => {
        let key = v.split('-')[1];

        return Object.assign(o, { [key]: values[v] });
      }, {});

      try {
        const body = Object.assign({}, newProject, { user }),
              res = await API.post(JSON.stringify(body), 'projects');

        const { id } = res.project;

        router.transitionTo(`/auth/projects/${id}`);
      }
      catch (e) {
        throw e;
      }
    }

    // TODO: Input validations
  }

  handleOnChange (e) {
    const { name, value } = e.target;

    this.setState({
      values: Object.assign({}, this.state.values, { [name]: value })
    });
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
                       onChange={this.handleOnChange}
                />
              </section>
              <section className="project-form__tagline">
                <Input name="project-tagline"
                       type="text"
                       label="Project Tagline"
                       onChange={this.handleOnChange}
                />
              </section>
              <section className="project-form__logo">
                  <Input name="project-logo"
                         type="text"
                         label="Project Logo URL"
                         onChange={this.handleOnChange}
                  />
              </section>
              <section className="project-form__description">
                <span className="input">
                  <label htmlFor="project-description"
                         className="project-description__label"
                  >
                    Project Description
                  </label>
                  <textarea rows="5"
                            name="project-description"
                            className="project-description__textarea"
                            onChange={this.handleOnChange}
                  />
                </span>
              </section>
              <section className="project-form__contact">
                <h3 className="project-form__section-title">
                  Project Contact information
                </h3>
                  <Input name="project-site"
                         type="text"
                         label="Project Site URL"
                         onChange={this.handleOnChange}
                  />
                  <Input name="project-github-url"
                         type="text"
                         label="Project GitHub URL"
                         onChange={this.handleOnChange}
                  />
              </section>
              <section className="project-form__tags">
                  <Input name="project-tags"
                         type="text"
                         label="Project Tags"
                         onChange={this.handleOnChange}
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
