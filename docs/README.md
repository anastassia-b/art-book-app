# Baehance Project Proposal
[Heroku link][heroku]
[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/X5VG72uB/baehance

## Minimum Viable Product

Behance is a portfolio showcase web application inspired by Behance-- built with Ruby on Rails and React/Redux. All MVP features will have smooth, bug-free navigation, adequate seed data and stylish CSS:

- [ ] Hosting on Heroku
- [ ] Production README
- [ ] Account Management with Demo option
- [ ] Portfolio Viewing
- [ ] Explore Portfolios
- [ ] Likes
- [ ] Comments

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend Configuration and Front End User Authentication (2 days)

**Objective:** To have a functioning rails project with front end authentication.

### Phase 2: Portfolio Model, API, and components (2 days)

**Objective:** Each user has a portfolio, which hosts many projects. Projects can be created, read, edited, and destroyed through the API.

### Phase 3: Project Content (2 days)

**Objective:** Each project can have many images, which can be created, read, edited, and destroyed through the API.

### Phase 4: Project Likes (1 day)

**Objective:** A user can like projects.

### Phase 5: Project Comments (2 days)

**Objective:** Users can comment on projects.

### Phase 6: Additional Styling (1 day)

**Objective:** To make a baeutiful landing page, with infinite scroll of projects.

### Bonus Features
- [ ] Follows: Users can follow each other.
- [ ] Views: Project views and user views can be quantified.
- [ ] Tags: Projects can be categorized.
