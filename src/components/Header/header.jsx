import { Container } from 'components/Container/Container';
/*import { NavLink } from 'react-router-dom';*/
import styles from './header.module.css';
/*import img from '../../images/logo.svg';*/

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          {/*<div className={styles.logo}>
            <NavLink style={{ textDecoration: 'none', color: 'unset' }}>
              <img alt="Logo" src={img} />{' '}
              <span className={styles.logo__name}> Wallet</span>
            </NavLink>
           </div>
           <div className={styles.auth__container}><p>{name}</p><button></button></div>*/}
        </div>
      </Container>
    </header>
  );
};
