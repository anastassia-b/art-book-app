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
    * ProjectIndexItem
      * ImagesIndex
        * ImagesIndexItem
    * ProjectIndexItemDetails

**ProjectShowContainer**
  * ProjectIndexItem
    * ProjectIndexItemDetails
    * ImagesIndex
      * ImagesIndexItem
    * CommentForm
    * CommentsIndex
      * CommentsIndexItem
        * CommentsDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/projects" | "ProjectsIndex" |
| "/post/new/" | "NewProjectForm" |
| "/projects/id" | "ProjectShow" |
| "/projects/id/images" | "ImagesIndex" |
| "/projects/id/comments" | "CommentsIndex" |
| "/projects/id/comments/commentId" | "CommentDetail" |
