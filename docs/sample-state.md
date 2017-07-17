```javascript
{
  currentUser: {
    1: {
      id: 1,
      username: 'picasso'
    }
  }

  forms: {
    createProject: { errors: ['Title cant be blank'] }
    createComment: { errors: ['Body cant be blank'] }
    signUp: { errors: [] }
    logIn: { errors: [] }
  }

  projects: {
    1: {
      id: 1,
      title: 'Blue Period',
      description: 'Artwork from January',
      likes: 100,
      userId: 1
      imageId: 1
    }
    2: {
      id: 2,
      title: 'Impressionato',
      description: 'Speckled paintings',
      likes: 10,
      userId: 1
      imageId: 2
    }
  }

  images: {
    1: {
      id: 1,
      projectId: 1,
      imageUrl: 'www.example.com/12344',
      caption: ''
    }
    3: {
      id: 3,
      projectId: 1,
      imageUrl: 'www.example.com/456789',
      caption: ''
    }
  }

  comments: {
    1: {
      id: 1,
      body: 'Nice!',
      projectId: 1,
      commentorId: 3
    }
  }

}
