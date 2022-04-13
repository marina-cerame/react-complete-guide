import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const onUserSubmit = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <AddUser onUserSubmit={onUserSubmit} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
