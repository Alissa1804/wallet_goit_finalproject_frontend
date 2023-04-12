import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import img from '../../images/logo.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo}>
          <NavLink
            className={styles.logo__link}
            to="/dashboard"
            style={{ textDecoration: 'none', color: 'unset' }}
          >
            <img className={styles.logo__img} alt="Logo" src={img} />{' '}
            <span className={styles.logo__name}> Wallet</span>
          </NavLink>
        </div>
        <div className={styles.auth__container}>
          <p className={styles.user__name}>Name{name}</p>
          <button
            type="button"
            className={styles.button__logout}
            onClick={() => dispatch(logout())}
          >
            <LogoutIcon className={styles.logout__icon} />
            <span className={styles.logout__text}>Exit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
