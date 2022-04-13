import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';

import styles from './AddUser.module.css';

const AddUser = ({ onUserSubmit }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [error, setError] = useState(null);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitUserHandler = (e) => {
    e.preventDefault();
    // Validate values
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Empty input',
        message: 'Username and age fields require a non-empty value',
      });
      return;
    }
    if (age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Age must be greater than 0.',
      });
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

  const closeModal = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          content={error.message}
          onConfirm={closeModal}
        />
      )}
      <Card className={`${styles.input}`}>
        <form onSubmit={submitUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
