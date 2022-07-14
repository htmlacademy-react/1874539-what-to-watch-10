import { Link } from 'react-router-dom';

import styles from './not-found-screen.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Page not found</h1>
      <span className={styles.errorCode}>404</span>
      <Link className={styles.link} to='/'>
        Go to main page
      </Link>
    </div>
  );
}

export default NotFoundScreen;
