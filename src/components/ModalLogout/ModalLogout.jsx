import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleModalOpen, setModalType } from '../../redux/global/global-slice';
import styles from './ModalLogout.module.css';
import { logout } from 'redux/auth/auth-operations';

export const ModalLogout = () => {
  const isModalOpen = useSelector(state => state.global.isModalOpen);
  const modalType = useSelector(state => state.global.modalType)
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModalOpen());
      dispatch(setModalType(null));
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleModalOpen());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      {isModalOpen && modalType === 'logout' && (
        <div className={styles.overlay} onClick={handleBackdropClick}>
          <div className={styles.modal__container}>
            <p className={styles.text}>Are you sure you want to log out?</p>
            <div className={styles.button__container}>
              <button
                title="logout"
                className={styles.button}
                onClick={() => {
                  dispatch(logout());
                  dispatch(toggleModalOpen());
                  dispatch(setModalType(null));
                }}
              >
                LOGOUT
              </button>
              <button
                title="cancel"
                className={styles.button}
                onClick={() => {
                  dispatch(toggleModalOpen());
                  dispatch(setModalType(null));
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
