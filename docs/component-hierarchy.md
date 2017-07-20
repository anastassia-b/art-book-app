## Component Hierarchy

**SplashContainer**

**SessionFormContainer**
 - Modals:
  * Sign In
  * Sign Up

**GreetingContainer**
  * Sign In/ Sign Up
  * Link to Homepage

**HomeContainer**
  * ProjectsIndex

**ProjectShowContainer**
  * ProjectItem
    * ProjectItemDetails
    * ImagesIndex
    * CommentForm
    * CommentsIndex
      * CommentItem

**ProfileShowContainer**
 * User Detail

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashContainer" |
| "/home" | "HomeContainer" |
| "/projects" | "ProjectsIndex" |
| "/projects/id" | "ProjectShow" |
| "/users/id" | "ProfileShow" |
