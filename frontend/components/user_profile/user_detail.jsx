import React from 'react';

const UserDetail = ({ user }) => (
  <aside className="user-info">
    <img className="avatar" src={user.avatar_url}/>
    <h3>{user.username}</h3>
    <p>Lorem ipsum dolor sit amet, noster verear pro cu, mea eu vitae latine contentiones. Duo in modo magna aeterno, eu dico definiebas ius, ei postea sensibus consequat sea. Ne commodo electram iudicabit duo, vim et illum dissentiet. Sit cu labore disputando, eu mea dolorum invidunt. Utinam diceret vim at. Ne vim autem vocent, ne est praesent iracundia. No noluisse abhorreant eos, has ei copiosae sapientem intellegam.
    </p>
  </aside>
);

export default UserDetail;
