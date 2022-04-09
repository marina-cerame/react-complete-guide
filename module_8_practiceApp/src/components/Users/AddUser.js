import { useState } from 'react';

import styles from './AddUser.module.css';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitUserHandler = (e) => {
    e.preventDefault();
    console.log(username, age);
  };
  return (
    <form onSubmit={submitUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={usernameChangeHandler} />
      <label htmlFor="age">Age (years)</label>
      <input id="age" type="number" onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
