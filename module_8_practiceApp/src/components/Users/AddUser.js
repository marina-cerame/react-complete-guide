import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUser.module.css';

const AddUser = ({ onUserSubmit }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (e) => {
    // Reset isValid when user changes input
    if (!isValid) {
      setIsValid(true);
    }
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    // Reset isValid when user changes input
    if (!isValid) {
      setIsValid(true);
    }
    setAge(e.target.value);
  };

  const submitUserHandler = (e) => {
    e.preventDefault();
    // Validate values
    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (age < 1) {
      setIsValid(false);
      return;
    }

    onUserSubmit({
      id: Math.random(),
      username,
      age,
    });

    // Reset form
    setUsername('');
    setAge('');
  };

  let validationMessage = '';

  if (!isValid) {
    validationMessage = (
      <p className={styles.invalid}>Please check your input.</p>
    );
  }

  return (
    <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
      {validationMessage}
      <form onSubmit={submitUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
