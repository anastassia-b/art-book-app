```javascript
{
  currentUser: {
    1: {
      id: 1,
      username: 'picasso'
    }
  }

  users: {
    1: {
      id: 1,
      username: 'picasso'
    }
    2: {
      id: 2,
      username: 'mondrian'
    }
  }

  userDetail: {
    
  }

  projects: {
    1: {
      id: 1,
      title: 'Blue Period',
      description: 'Artwork from January',
      userId: 1
    }
    2: {
      id: 2,
      title: 'Impressionato',
      description: 'Speckled paintings',
      userId: 1
    }
  }

  projectDetail: {
    images: {
      1: {
        id: 1,
        imageUrl: 'www.example.com/12344', //need url?
        caption: ''
      }
      3: {
        id: 3,
        imageUrl: 'www.example.com/456789',
        caption: ''
      }
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

  errors: {
    session: {errors: []}
  }

}
