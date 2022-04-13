import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <Card className={styles.users}>
        <p>No users found.</p>
      </Card>
    );
  }

  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <span className={styles.name}>{user.username}</span>: {user.age}{' '}
              years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
