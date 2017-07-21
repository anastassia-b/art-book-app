# Baehance Project Proposal

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.baehance.herokuapp.com
[trello]: https://trello.com/b/X5VG72uB/baehance

## Minimum Viable Product

Baehance is a portfolio showcase web application inspired by Behance-- built with Ruby on Rails and React/Redux. All MVP features will have smooth, bug-free navigation, adequate seed data and stylish CSS:

1. Hosting on Heroku
2. Production README
3. Account Management with Demo option
4. Explore All Portfolios
5. Portfolio Viewing
6. Likes
7. Comments

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend Configuration and Front End User Authentication (2 days)

**Objective:** To have a functioning rails project with front end authentication.

### Phase 2: Project Model, API, and Components (1 day)

**Objective:** Each user has a portfolio, which hosts many projects. Projects can be viewed from the home index page.

### Phase 3: Project Content (1 day)

**Objective:** Each project has a description and can have many images. Viewing a project opens a modal which displays the full content.

### Phase 4: User Profiles (2 days) (by W9D2 evening)

**Objective:** Each user has a profile which showcases their projects.

### Phase 5: Project Likes (1 day)

**Objective:** A user can like projects. This is visible both on the project and on the user's profile.

### Phase 6: Project Comments (1 day) (by W9D4 evening)

**Objective:** Users can comment on each others projects.


### Bonus Features
- [ ] Follows: Users can follow each other.
- [ ] Views: Project views and user views can be quantified.
- [ ] Tags: Projects can be categorized.
- [ ] Create Projects: Projects can be created, edited, read, and destroyed through the API.
