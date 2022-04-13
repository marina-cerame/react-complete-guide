import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Modal = ({ title, content }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <footer className={styles.actions}>
        <Button>Confirm</Button>
      </footer>
    </Card>
  );
};

export default Modal;
