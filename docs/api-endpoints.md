# API Endpoints

## HTML API

### Root

* GET / - loads React web app

## JSON API

### Users

* GET /api/users/:userId
* POST /api/users
* PATCH /api/users/:userId

### Session

* POST /api/session
* DELETE /api/session

### Projects

* GET /api/projects
* POST /api/projects
* GET /api/projects/:id
  * index of all images for a project
* DELETE /api/projects/:id
* GET /api/users/:userId/projects

### Comments

* GET /api/projects/:id/comments
* POST /api/comments
* DELETE /api/comments/:id

### Likes

* GET /api/projects/:id/likes
* POST /api/likes
* DELETE /api/likes/:likeId
