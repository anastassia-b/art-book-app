## Component Hierarchy

**AuthFormContainer**
 - AuthForm
  * Sign In
  * Sign Up

**NewProjectModal**
  * NewProjectForm

**Header**
  - Sign In/ Sign Up
  - Logo
  - New Project
  - Search Bar

**HomeContainer**
  * Header
  * ProjectsIndex
    * ProjectItem
      * ImagesIndex
    * ProjectItemDetails

**ProjectShowContainer**
  * ProjectItem
    * ProjectItemDetails
    * ImagesIndex
    * CommentForm
    * CommentsIndex
      * CommentItem

**UserProfileContainer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/projects" | "ProjectsIndex" |
| "/projects/new" | "NewProjectForm" |
| "/projects/id" | "ProjectShow" |
| "/users/id" | "ProfileShow" |
