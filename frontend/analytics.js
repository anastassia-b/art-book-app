/* global analytics */

const initializeAnalytics = (store) => {
    let currentUser = store.getState().session.currentUser;
    if (currentUser) {
      let userProperties = {
        username: currentUser.username,
      };
  
      analytics.identify(
        currentUser.id,
        userProperties
      );
    }
  };
  
  export default initializeAnalytics;