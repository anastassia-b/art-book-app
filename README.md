# ArtBook

[![tested with rspec](https://img.shields.io/badge/tested%20with-rspec-brightgreen.svg)](https://github.com/rspec/rspec-rails)
[![tested with jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

https://artbookapp.herokuapp.com/

ArtBook is a portfolio showcase web application. It is a full-stack app built using a `Ruby on Rails` backend, `PostgreSQL` database, and `React/Redux` front-end architecture.

## Planning & Design

<p align="center">
<img src="./docs/wireframes/wireframes.jpg" />
</p>
<p align="center">
<a href="https://github.com/anastassia-b/art-book-app/wiki">Design documents can be found in the wiki!</a>
</p>

## Technologies

### Backend
* Ruby On Rails, PostgreSQL, Heroku, Cloudinary

  <img src="https://user-images.githubusercontent.com/26920351/36052369-45a5788a-0da2-11e8-8058-8ef5c98c759c.jpeg" height="50">
  <img src="https://user-images.githubusercontent.com/26920351/36052411-766d6d88-0da2-11e8-8585-8fe14190f03b.png" height="50">
  <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" height="45">   <img src="https://avatars2.githubusercontent.com/u/1460763?s=400&v=4" height="50">   

### Frontend
* React/Redux, HTML5, CSS3/SCSS, npm, webpack

  <img src="https://user-images.githubusercontent.com/26920351/36052718-a5709848-0da3-11e8-8a16-bf47966d3f63.png" height="45">   <img src="https://user-images.githubusercontent.com/26920351/36052733-b59ab8f2-0da3-11e8-941b-2afc80a4219e.png" height="40">
  <img src="https://user-images.githubusercontent.com/26920351/36052477-a6e7e416-0da2-11e8-813a-1ee556d4d8b0.png" height="50">  <img src="https://user-images.githubusercontent.com/26920351/36052488-b2fb00b2-0da2-11e8-995b-aeac3b9e68bb.png" height="50">

### Testing
* RSpec Rails, Jest, (Jenkins in progress)


## Features & Implementation

1. **Users:** A user can sign up, log in, and log out. Each user has a profile.

2. **Projects:** Users own many projects, which are composed of images. Images belong to a specific project. Projects can be explored on the dashboard.

3. **Comments:** Users can comment on projects and delete their own comments.

4. **Likes:** Users can like and unlike projects. A users liked projects are displayed on their profile.

```ruby
# User Model Associations
class User < ApplicationRecord
  # ...
  has_many :projects, dependent: :destroy
  has_many :images, through: :projects, source: :images
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_projects, through: :likes, source: :project
  # ...
end
```


### Secure Authentication
* BCrypt for password-salting and hashing for a secure authentication system.
* Guest / Demo Account


<p align="center">
<img src="http://g.recordit.co/DTgAZHML7h.gif" width="500"/>
</p>

### Modals

Modals were used to implement the Login/Signup session forms, as well as project views.

```jsx
render() {
  const project = this.props.project;
  return (
    <div>
      <div className="project" key={project.id}>
        <section onClick={this.openModal.bind(this)}>
          <img className="thumbnail" src={project.thumbnail_url}/>
        </section>
        <section className="thumbnail-info">
          <span className="project-title">{project.title}</span>
          <Link to={`/users/${project.user_id}`}
                className="artist-name">{project.user}
          </Link>
        </section>
      </div>

      <Modal
        contentLabel="Modal"
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={style}>

        <div className="x-button">
          <button onClick={this.closeModal}><i aria-hidden="true"></i>
          </button>
        </div>
        <div className="project-detail">
          <ImageIndexContainer project={project}/>
          <ProjectInfoContainer project={project}/>
        </div>
      </Modal>
    </div>
  );
}
```

### Comments and Likes

Users can comment and like projects.

<p align="center">
<img src="http://g.recordit.co/aHuEZPU54l.gif" width="500"/>
</p>

## In-Progress

- [x] In progress: setup Continuous Integration (Jenkins build passed)
- [ ] In progress: Deploy through AWS server and remote Postgres database.
- [ ] Write more backend and frontend tests.
- [ ] Point heroku to custom domain name.
- [ ] Refactor project modal.
- [ ] Refactor api call on a user page.
- [ ] Ensure no n+1 queries.


## Future Features


#### Infinite scroll

This will allow users to keep scrolling to retrieve more content, instead of fetching it all at once.

#### Follows and User-specific Feed

Users will be able to follow each other, allowing for a customizable feed per user.

#### Search by content (tags)

Categorizing projects will allow users to search and filter through projects.

#### Upload projects

Users will be able to upload, edit, and destroy their own projects through the API.
